import React, { useEffect } from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Button, Input, InputGroup, Label } from "reactstrap";
import { isAuth, setAuth } from "../../utils/globalVariables";
import { useHistory } from "react-router-dom";

function Index() {
  const history = useHistory();

  useEffect(() => {
    if (isAuth()) {
      history.push("/inicio");
    }
  }, []);

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .matches(
              /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
              "No es un formato de correo"
            )
            .required("Este campo es obligatorio"),
          password: Yup.string()
            .required("Este campo es obligatorio")
            .matches(
              /^(?=.*[A-Z])(?=.*\d)(?=.*)[A-Za-z\d]{7,}$/,
              "Tu contraseña debe tener minimo 7 Caracteres, 1 Mayuscula(inicial) y 1 Numero"
            ),
        })}
        onSubmit={(values) => {
          setAuth(values);
          history.push("/inicio");
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          dirty,
          isSubmitting,
          handleSubmit,
          handleReset,
        }) => (
          <Form>
            <InputGroup>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <div className="field-error">
                    <small className="text-danger">{msg}</small>
                  </div>
                )}
              </ErrorMessage>
            </InputGroup>
            <InputGroup>
              <Label htmlFor="password">password:</Label>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorMessage name="password">
                {(msg) => (
                  <div className="field-error">
                    <small className="text-danger">{msg}</small>
                  </div>
                )}
              </ErrorMessage>
            </InputGroup>
            <Button
              type="submit"
              className="px-4 btn-purple-irys"
              block
              disabled={isSubmitting}
              style={{ cursor: "pointer" }}
            >
              Ingresar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Index;
