import React from "react";
import { Container } from "react-bootstrap";
import Search from "../components/Searchprod";

export const Comp = () => {
  return (
    <Container>
      <Search DevProd={obtenProdu} />
    </Container>
  );
};

export default Comp;
