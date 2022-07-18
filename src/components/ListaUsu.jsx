import React, { useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import moment from "moment";

export const ListaUsu = ({
  Usuario,
  handleOpenModal,
  handleCloseModal,
  setDataModal,
}) => {
  const handleEditar = (datos) => {
    //handleOpenModal();
    // setDataModal(datos);
  };
  return (
    <Container>
      <h1 className="text-center"> Listado de Usuarios</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Usuario</th>
            <th>Contrasenia</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {Usuario.map((Usu, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{Usu.nombre}</td>
              <td>{Usu.direccion}</td>
              <td>{Usu.telefono}</td>
              <td>{Usu.usuario}</td>
              <td>{Usu.pass}</td>
              <td>{Usu.rol}</td>
              <td>
                <button className="btn btn-info">Editar</button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};
export default ListaUsu;
