import React, { useState } from "react";
import "./TodoForm.css";

export const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (title) {
      // add todo
      addTodo(title, description, date);
      // clear form after submission
      setTitle("");
      setDescription("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <textarea
        className="todo-input-textarea"
        placeholder="Add a description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="date-input"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />

      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
