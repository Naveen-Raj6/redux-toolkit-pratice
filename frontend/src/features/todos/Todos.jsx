import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, toggle } from "./todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos); // access todos slice
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(add(text));
    setText("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h2>Todo List</h2>

      {/* Add Form */}
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo"
        />
        <button type="submit">Add</button>
      </form>

      {/* Todo List */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: todo.completed ? "#e0ffe0" : "white",
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggle(todo.id))}
              />
              <span
                style={{
                  marginLeft: "10px",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </div>
            <button onClick={() => dispatch(remove(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
