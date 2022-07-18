import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import Search from "../components/Searchprod";
import Lista from "../components/ListaPven";
import Clien from "../components/CliVenta";
import Tipo from "../components/VendTipo";

export const Vent = () => {
  const [produ, setProdu] = useState([]);
  const [lista, setLista] = useState(<Lista prods={produ} />);
  const [total, setTotal] = useState();

  const canti = 1;

  const obtenProdu = (prod) => {
    produ.push(prod);

    listado(produ);
  };

  const editProd = (indice, cant, precio) => {
    produ.map((elem, index) => {
      if (indice == index) {
        elem.cant = cant;
      }
      listado(produ);
    });
  };

  const elimProd = (indice) => {
    produ.splice(indice, 1);
    listado(produ);
  };

  const handleTotal = (cant, valor) => {
    let total = cant * valor;

    return total;
  };

  const listado = (produc) => {
    setLista(
      <Lista
        prods={produc}
        handleElim={elimProd}
        setProdu={setProdu}
        handleEditar={editProd}
      />
    );
  };

  return (
    <Container>
      <Search DevProd={obtenProdu} />
      <Clien></Clien>
      <Tipo></Tipo>

      {lista}
    </Container>
  );
};

export default Vent;
