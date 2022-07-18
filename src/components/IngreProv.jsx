import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const IngreProv = () => {
  return (
    <Container>
      <Button className="btn btn-success">
        Agregar nuevo proveedor <Link to="/newprov" className="nav-link"></Link>
      </Button>
    </Container>
  );
};

export default IngreProv;
