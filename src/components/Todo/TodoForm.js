import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Form } from "reactstrap";
import "./index.css";

function TodoForm(props) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100), //id aleatoreo para cada tarea
      task: input,
    });
    setInput("");
  };
  return (
    <Form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <Input
            type="text"
            placeholder="Actualiza tu tarea"
            value={input}
            name="task"
            onChange={handleChange}
            ref={inputRef}
            className="todo-input edit"
          />
          <Button onClick={handleSubmit} className="todo-button update">
            Actualizar
          </Button>
        </>
      ) : (
        <>
          <Input
            type="text"
            placeholder="Añade una tarea"
            value={input}
            name="task"
            onChange={handleChange}
            ref={inputRef}
            className="todo-input edit"
          />
          <Button onClick={handleSubmit} className="todo-button edit">
            Añadir Tarea
          </Button>
        </>
      )}
    </Form>
  );
}

export default TodoForm;
