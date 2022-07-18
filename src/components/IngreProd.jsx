import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const IngreProd = () => {
  return (
    <Container>
      <Button className="btn btn-success">
        Agregar nuevo producto <Link to="/newprod" className="nav-link"></Link>
      </Button>
    </Container>
  );
};

export default IngreProd;
