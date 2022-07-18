import React, { useState } from "react";
import { Button, Container, FormLabel, Modal, Table } from "react-bootstrap";
import moment from "moment";

export const ListaProd = ({
  produ,
  handleOpenModal,
  handleCloseModal,
  setDataModal,
}) => {
  const handleEditar = (datos) => {
    //handleOpenModal();
    setDataModal(datos);
  };

  return (
    <Container>
      <h1 className="text-center"> Listado de Productos</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Produto</th>
            <th>Descripcion</th>
            <th>Costo</th>
            <th>Precio Minimo</th>
            <th>Precio de Venta</th>
            <th>Cantidad</th>
            <th>Fecha de caducidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {produ.map((prod, index) => (
          <tbody>
            <tr>
              <td>{prod.id_prod}</td>
              <td>{prod.nombre}</td>
              <td>{prod.descrip}</td>
              <td>{prod.costo}</td>
              <td>{prod.pmin}</td>
              <td>{prod.pven}</td>
              <td>{prod.cantidad}</td>
              <td>{moment(prod.caduc).format("DD/MM/yyyy")}</td>
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

export default ListaProd;
