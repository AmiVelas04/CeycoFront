import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const IngreUsu = () => {
  return (
    <Container>
      <Button className="btn btn-success">
        Agregar nuevo usuario <Link to="/newusu" className="nav-link"></Link>
      </Button>
    </Container>
  );
};

export default IngreUsu;
