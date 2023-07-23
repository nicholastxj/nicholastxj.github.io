import React, { useState } from "react";
import './EditTodoForm.css'

export const EditTodoForm = ({ editTodo, task }) => {
  const [title, setTitle] = useState(task.task);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(title, description, date, task.id);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    task.isEditing = false;
    editTodo(task.task, task.description, task.deadline, task.id);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="todo-input-textarea"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        className="date-input"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <div className="buttons-container">
        <button className="todo-btn" type="submit">
          Submit
        </button>
        <button className="todo-btn" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
