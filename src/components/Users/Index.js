import React, { useEffect, useState } from "react";
import ServiceInteractor from "../../services/ServiceInteractor";
import { AiFillCheckCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Spinner } from "reactstrap";
import "./index.css";
function Index() {
  const Interactor = new ServiceInteractor();
  const [users, setUsers] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await Interactor.getUsers();
      setUsers(response);
    }
    fetchData();
  });
  if (users.length !== 0) {
    users.sort(function (a, b) {
      return a.nombre.localeCompare(b.nombre); //using String.prototype.localCompare()
    });
  }
  return (
    <div className="users-responsive">
      <h1>Usuarios</h1>
      {users.length !== 0 ? (
        users.map((info) => (
          <div
            key={info.id}
            className="card"
            style={{ width: "50%", left: "25%", textAlign: "start" }}
          >
            <div className="card-text">
              <h2>Nombre: {info.nombre}</h2>
              <h2>Apellido: {info.apellidos}</h2>
              <h2>Telefono:{info.telefono}</h2>
              <h2>Correo: {info.emial}</h2>
              <h2>
                Estado:{" "}
                {info.estado ? (
                  <AiFillCheckCircle color="green" />
                ) : (
                  <ImCross color="red" />
                )}
              </h2>
            </div>
          </div>
        ))
      ) : (
        <>
          <Spinner color="success" />
          <h2>Cargando....</h2>
        </>
      )}
    </div>
  );
}

export default Index;
