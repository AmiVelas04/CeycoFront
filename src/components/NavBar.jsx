import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Container fluid>
      <Navbar expand="md" bg="dark" variant="warning" sticky="top">
        <Container>
          <Link to="/" className="navbar-brand">
            <img
              alt=""
              src="../../public/icono.PNG"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <h7>CEYCO</h7>
          </Link>
        </Container>
        <Nav className="me-auto">
          <NavDropdown title="Operaciones" id="navbarScrollingDropdown">
            <NavDropdown.Item>
              {" "}
              <Link to="/vent" className="nav-link" bg="success">
                Ventas
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link to="/comp" className="nav-link">
                Compras
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link to="/gast" className="nav-link">
                Gastos
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Administracion" id="navbarScrollingDropdown">
            <NavDropdown.Item>
              <Link to="/produ" className="nav-link pb-4 pb-8 ">
                Productos
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/usu" className="nav-link">
                Usuarios
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/cli" className="nav-link primary">
                Clientes
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/prov" className="nav-link">
                Proveedores
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Reportes" id="navbarScrollingDropdown">
            <NavDropdown.Item>
              {" "}
              <Link to="/prov" className="nav-link">
                Conseciones
              </Link>
            </NavDropdown.Item>{" "}
            <NavDropdown.Item>
              {" "}
              <Link to="/" className="nav-link">
                Ventas
              </Link>
            </NavDropdown.Item>{" "}
            <NavDropdown.Item>
              {" "}
              <Link to="" className="nav-link">
                Gastos
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;
