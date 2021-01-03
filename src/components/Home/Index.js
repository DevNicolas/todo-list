import React from "react";
import { getAccount, getData } from "../../utils/globalVariables";
import { IoIosNotifications } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { Row, Col, CardHeader, CardBody, Card } from "reactstrap";

import "./index.css";

function Index() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/tasks");
  };
  return (
    <Row>
      <Col xs={12} style={{ backgroundColor: "#111", height: "40px" }}>
        {getData() && getData().length !== 0 ? (
          <>
            <h4 className="nav-user">
              Bienvenido {getAccount().email}
              <IoIosNotifications
                className="notification"
                onClick={() => handleClick()}
              />
              {getData().length}
            </h4>
          </>
        ) : getAccount() ? (
          <>
            <h4 className="nav-user">
              Bienvenido {getAccount().email}
              <IoIosNotifications
                className="notification"
                onClick={() => handleClick()}
              />{" "}
              0
            </h4>
          </>
        ) : null}
      </Col>
      <Col xs={12}>
        <Card>
          <CardHeader>
            <h1>Inicio</h1>
          </CardHeader>
          <CardBody>
            <img
              src="https://image.freepik.com/vector-gratis/pagina-bienvenida-bienvenida-gradiente-puesta_52683-20479.jpg"
              alt="imagen de bienvenida"
              className="image-home"
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Index;
