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
      let canti = 0,
        price = 0;
      canti = handlePrec(elem, indice, precio);
      price = handleCanti(elem, indice, cant);
      console.log(canti + "---" + price);
    });
    setProdu(produ);
    listado(produ);
  };

  const handlePrec = (valor, id, prize) => {
    let resp = "0";
    valor.map((val) => {
      if (id == val.id_prod) {
        val.pven = prize;
        resp = val.pven;
        return resp;
      }
    });
  };

  const handleCanti = (valor, id, cant) => {
    let resp = "0";
    valor.map((val) => {
      if (id == val.id_prod) {
        val.cantidad = cant;
        resp = val.cantidad;
        return resp;
      }
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
    setLista(<Lista prods={produc} handleElim={elimProd} Edita={editProd} />);
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
