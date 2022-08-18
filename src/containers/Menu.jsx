import React from "react";

import { Container, Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Router } from "react-router-dom";

import NavBar from "../components/NavBar";

import { Routers } from "../routes/Router";

export const Menu = () => {
  return (
    <div>
      <Routers />
    </div>
  );
};

export default Menu;
