import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Form } from "reactstrap";

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
      id: Math.floor(Math.random() * 100),
      task: input,
    });
    setInput("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <Input
            type="text"
            placeholder="Actualiza tu tarea"
            value={input}
            name="task"
            onChange={handleChange}
            ref={inputRef}
          />
          <Button>Actualizar</Button>
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
          />
          <Button>Añadir Tarea</Button>
        </>
      )}
    </Form>
  );
}

export default TodoForm;
