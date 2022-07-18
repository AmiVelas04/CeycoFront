import React from "react";
import { Container, Table } from "react-bootstrap";

export const ListaProve = ({ prove, handleOpenModal, setDataModal }) => {
  const handleEditar = (datos) => {
    handleOpenModal();
    // handleCloseModal();
    setDataModal(datos);
  };

  return (
    <Container>
      <h1> Listado de Proveedores</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Nit</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {prove.map((prov) => (
          <tbody>
            <tr>
              <td>{1}</td>
              <td>{prov.nombre}</td>
              <td>{prov.direccion}</td>
              <td>{prov.nit}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={handleEditar(prov)}
                >
                  Editar
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default ListaProve;
