    import React from 'react'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
    import { faTrash } from '@fortawesome/free-solid-svg-icons'
    import './Todo.css'

    export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  
      return (
        <div className="Todo">
            <h2 className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</h2>
            <p>{task.description}</p>
            <p>Deadline: {task.deadline}</p>
            <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
      )
    }
    