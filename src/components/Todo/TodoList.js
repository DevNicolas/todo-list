import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Index";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.task || /^\s*$/.test(todo.task)) {
      //si la tarea contiene solo espacios no se crea, si la tarea contiene muchos espacios entre palabras se eliminan
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.task || /^\s*$/.test(newValue.task)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  return (
    <div>
      <h1>¿Que tienes planeado hacer hoy?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
