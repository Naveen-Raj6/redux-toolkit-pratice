import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from './quoteSlice';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Avatar,
  Paper
} from '@mui/material';

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, status, error } = useSelector((state) => state.quote);

  const handleFetchQuote = () => {
    dispatch(fetchRandomQuote());
  };

  // Random image for author
  const authorImage = quote?.author
    ? `https://i.pravatar.cc/150?u=${encodeURIComponent(quote.author)}`
    : 'https://i.pravatar.cc/150?u=default';

  // Random background image every time
  const bgImage = `https://picsum.photos/800/400?random=${Math.floor(
    Math.random() * 1000
  )}`;

  return (
    <Paper
      elevation={6}
      sx={{
        maxWidth: 500,
        mx: 'auto',
        mt: 4,
        borderRadius: 3,
        overflow: 'hidden'
      }}
    >
      {/* Top Section - Background Image */}
      <Box
        sx={{
          height: '30%',
          minHeight: 200,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        {/* Author Avatar Overlapping */}
        {quote && (
          <Avatar
            src={authorImage}
            sx={{
              position: 'absolute',
              bottom: -40, // half in top, half in bottom
              left: 20,
              width: 80,
              height: 80,
              border: '4px solid white',
              boxShadow: 2
            }}
          />
        )}
      </Box>

      {/* Bottom Section - White Background */}
      <Box
        sx={{
          backgroundColor: 'white',
          pt: 6, // space for avatar
          pb: 3,
          px: 3,
          minHeight: '70%' // enforce height proportion
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Random Quote
        </Typography>

        {status === 'loading' && <CircularProgress />}
        {status === 'failed' && (
          <Typography color="error">Error: {error}</Typography>
        )}
        {status === 'succeeded' && quote && (
          <>
            <Typography
              variant="body1"
              sx={{ fontStyle: 'italic', mb: 1 }}
            >
              "{quote.quote}"
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              — {quote.author}
            </Typography>
          </>
        )}

        {/* Full Width Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleFetchQuote}
        >
          Get Quote
        </Button>
      </Box>
    </Paper>
  );
};

export default Quote;
