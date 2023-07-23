import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { db } from "../../firebase";
import {
  collection,
  deleteDoc,
  updateDoc, 
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import "./TodoWrapper.css";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosCollection = collection(db, "todos");
      const todosSnapshot = await getDocs(todosCollection);
      const todosList = todosSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(todosList);
    };
    fetchTodos();
  }, []);

  const addTodo = async (title, description, date) => {
    const id = uuidv4();
    const todo = {
      id,
      task: title,
      description: description,
      deadline: date,
      completed: false,
      isEditing: false,
    };
    const todoDoc = doc(db, "todos", id);
    await setDoc(todoDoc, todo);
    setTodos((oldTodos) => [...oldTodos, todo]);
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };
    const todoDoc = doc(db, "todos", id);
    await updateDoc(todoDoc, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = async (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.isEditing = !updatedTodo.isEditing;
    const todoDoc = doc(db, "todos", id);
    await updateDoc(todoDoc, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const editTask = async (title, description, date, id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.task = title;
    updatedTodo.description = description;
    updatedTodo.deadline = date;
    updatedTodo.isEditing = false;
    const todoDoc = doc(db, "todos", id);
    await updateDoc(todoDoc, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div className="TodoWrapper">
      <h1>CatConnect</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
