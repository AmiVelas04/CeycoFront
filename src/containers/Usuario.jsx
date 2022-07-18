import React from "react";
import { Container } from "react-bootstrap";
import IngreUsu from "../components/IngreUsu";
import Usu from "../components/Usu";

export const Usuario = () => {
  return (
    <Container>
      <IngreUsu></IngreUsu>
      <Usu></Usu>
    </Container>
  );
};

export default Usuario;
