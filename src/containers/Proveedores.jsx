import React from "react";
import { Container } from "react-bootstrap";
import IngreProv from "../components/IngreProv";
import Prov from "../components/Prove";

export const s = () => {
  return <div></div>;
};

export const Proveedor = () => {
  return (
    <Container>
      <IngreProv></IngreProv>
      <Prov></Prov>
    </Container>
  );
};

export default Proveedor;
