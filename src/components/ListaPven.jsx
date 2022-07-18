import React, { useState, useEffect } from "react";
import { Container, Table, Button, FormLabel, Row } from "react-bootstrap";

export const ListaPven = ({ prods, handleElim, setProdu }) => {
  const [body, setBody] = "";
  const handleEliminarprod = (indice) => {
    prods.splice(indice);
    setProdu(prods);
  };

  const handleEditar = (indice) => {};
  const handleId = (valor) => {
    let resp = "";
    valor.map((val) => {
      resp = val.id_prod;
    });
    return resp;
  };

  const handleNom = (valor) => {
    let resp = "";
    valor.map((val) => {
      resp = val.nombre;
    });
    return resp;
  };
  const handleDesc = (valor) => {
    let resp = "";
    valor.map((val) => {
      resp = val.descip;
    });
    return resp;
  };
  const handlePre = (valor) => {
    let resp = "";
    valor.map((val) => {
      resp = val.pven;
    });
    return resp;
  };
  const handleCant = (valor) => {
    let resp = "";
    valor.map((val) => {
      resp = val.cantidad;
    });
    return resp;
  };
  const handleTot = (valor) => {
    let n1 = 0,
      n2 = 0,
      tot = 0;
    valor.map((val) => {
      n1 = val.pven;
      n2 = val.cantidad;
      tot = n1 * n2;
      // console.log(n1, n2, tot);
    });
    return tot;
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <div>
        <h1 className="text-center"> Venta</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Codigo</th>
              <th>Producto</th>
              <th>Descripcion</th>
              <th>Precio de venta</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>

          {prods.map((p, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{handleId(p)}</td>
                <td>{handleNom(p)}</td>
                <td>{handleDesc(p)}</td>
                <td>{handlePre(p)}</td>
                <td>{handleCant(p)}</td>
                <td>{handleTot(p)}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleEditar(index)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleElim(index)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      <div>
        <Row className="md-10 offset-1">
          <h3>
            <FormLabel className="md-3 offset-9">Total Q.0.00</FormLabel>
          </h3>
        </Row>
        <Row className="md-10 offset-1">
          <Button size="lg" variant="success">
            Realizar Venta
          </Button>
        </Row>
      </div>
    </Container>
  );
};

export default ListaPven;
