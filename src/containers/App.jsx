import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Router } from "react-router-dom";
import ListProd from "../components/Prod";
import NavBar from "../components/NavBar";
import log, { Login } from "../containers/Login";
import { Routers } from "../routes/Router";

export const App = () => {
  return (
    <Container fluid>
      <Login />
    </Container>
  );
};

export default App;
