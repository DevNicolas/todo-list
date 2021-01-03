import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Index";
import { setData, getData } from "../../utils/globalVariables";
import "./index.css";
import { Button } from "reactstrap";
function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (getData() && getData().length !== 0) {
      setTodos(getData());
    }
  }, []);
  const addTodo = (todo) => {
    if (!todo.task || /^\s*$/.test(todo.task)) {
      //si la tarea contiene solo espacios no se crea, si la tarea contiene muchos espacios entre palabras se eliminan
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setData(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setData(updatedTodos);
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    setData(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.task || /^\s*$/.test(newValue.task)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const clearTodo = () => {
    setTodos([]);
    setData([]);
  };
  return (
    <div className="todo-component">
      <h1>¿Que tienes planeado hacer hoy?</h1>
      <TodoForm onSubmit={addTodo} />
      {todos.length !== 0 ? (
        <>
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
          <Button onClick={() => clearTodo()} className="btn-limpiar">
            Limpiar Lista
          </Button>
        </>
      ) : null}
    </div>
  );
}

export default TodoList;
