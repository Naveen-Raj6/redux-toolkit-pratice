import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandomQuote',
  async () => {
     const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    console.log(data)
    return data;
  }
);

const initialState = {
  data: null,
  status: 'idle',
  error: null
};



const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.quote = action.payload;
      })
      .addCase(fetchRandomQuote.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Failed to fetch quote';
      });
  }
});

export default quoteSlice.reducer;
