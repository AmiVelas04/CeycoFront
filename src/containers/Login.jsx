import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Alert, Container } from "react-bootstrap";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

import "../css/login.css";

export const Login = () => {
  const cookies = new Cookies();

  const [usua, setUsua] = useState([]);
  const UrlUsu = "/usuario/Todos";

  useEffect(() => {
    //usefect body
    getData().then((response) => {
      //hacer alggo con esa respuesta
      setUsua(response.data);
      console.log(response.data);
    });
  }, []);

  const getData = async () => {
    const response = axios.get(UrlUsu);
    return response;
  };

  const [state, setState] = useState({
    user: "",
    pass: "",
  });
  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const iniciaSesion = () => {
    if (validarLog()) {
      cookies.set("id", state.id_usu, { path: "/" });
      cookies.set("Nombre", state.nombre, { path: "/" });
      window.location.href = "/menu";
    } else {
      alert("Error de Ingreso, intente de nuevo");
    }
  };

  const validarLog = () => {
    usua.forEach((item) => {
      if (item.usu === state.user && item.pass === state.pass) {
        console.log("Correcto");
        return true;
      } else {
      }
    });
    console.log("Error");
    //    return false;
  };

  return (
    <Container>
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control"
              name="user"
              placeholder="Ingrese su usuario"
              onChange={handleChange}
            />
            <br />
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="pass"
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={() => iniciaSesion()}>
              Iniciar Sesion
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
