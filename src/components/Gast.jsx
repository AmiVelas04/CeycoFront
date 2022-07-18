import React from "react";
import { Container, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export const Gast = () => {
  return (
    <Container>
      <Button className="btn btn-success">
        Agregar Gasto<Link to="/newgast" className="nav-link"></Link>
      </Button>
    </Container>
  );
};
export default Gast;
