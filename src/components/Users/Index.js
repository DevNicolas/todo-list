import React, { useEffect, useState } from "react";
import ServiceInteractor from "../../services/ServiceInteractor";
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
    <div>
      {users.length !== 0 ? (
        users.map((info) => (
          <div key={info.id}>
            <h2>Nombre: {info.nombre}</h2>
            <h2>Apellido: {info.apellidos}</h2>
            <h2>Telefono:{info.telefono}</h2>
            <h2>Correo: {info.emial}</h2>
          </div>
        ))
      ) : (
        <p>estamos cargando los usuarios</p>
      )}
    </div>
  );
}

export default Index;
