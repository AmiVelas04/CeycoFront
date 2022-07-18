import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const IngCli = () => {
  return (
    <Container>
      <Button className="btn btn-success">
        Agregar nuevo cliente <Link to="/newcli" className="nav-link"></Link>
      </Button>
    </Container>
  );
};

export default IngCli;
