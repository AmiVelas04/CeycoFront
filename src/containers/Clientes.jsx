import React from "react";
import { Container } from "react-bootstrap";
import Client from "../components/Cli";
import IngCli from "../components/IngCli";

export const Clientes = () => {
  return (
    <Container>
      <IngCli></IngCli>
      <Client></Client>
    </Container>
  );
};

export default Clientes;
