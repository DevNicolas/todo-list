import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import "./index.css";
function Index({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className="todo-all">
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} className="tasks">
            <small>{todo.task}</small>
            <div className="icons">
              <FaCheck
                onClick={() => completeTodo(todo.id)}
                className="success-icon"
              />
              <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
              />
              <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.task })}
                className="edit-icon"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Index;
