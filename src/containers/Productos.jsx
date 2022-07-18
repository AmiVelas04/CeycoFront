import React from "react";
import { Container } from "react-bootstrap";
import IngreProd from "../components/IngreProd";
import Prod from "../components/Prod";

export const Productos = () => {
  return (
    <Container>
      <IngreProd></IngreProd>
      <Prod></Prod>
    </Container>
  );
};

export default Productos;
