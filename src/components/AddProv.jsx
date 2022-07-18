import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Form, FormSelect } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";

export const AddProv = () => {
  const URLget1 = "/usuario/roles";
  const URLpost1 = "/proveedor/saveprov";

  const [data, setData] = useState({
    id_prov: "",
    nombre: "",
    direccion: "",
    nit: "",
  });

  const history = useNavigate();
  useEffect(() => {}, []);

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setRol({ ["id_rol"]: rol.id_rol, ["id.usu"]: data.id_usu });
    console.log(data);

    try {
      const response1 = await axios.post(URLpost1, data);

      if (response1.status == 200) {
        await Swal(
          "Guardado",
          "El Proveedor " + response1.data.nombre + " ha sido guardado",
          "success"
        );
        history("/prov");
      } else if (response1.status == 500) {
        Swal("No guardado", "El proveedor no pudo ser guardado", "error");
      }
    } catch (error) {
      Swal(
        "No guardado",
        "El proveedor no pudo ser guardado, verifique el estado del servidor",
        "error"
      );
      console.log(error);
    }

    // console.log(response.status);
  };
  return (
    <Container>
      <h1 className="text-center">Ingresar Proveedor</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            name="id_prov"
            placeholder="Codigo"
            value={data.id_prov}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre del proveedor"
            value={data.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="direccion"
            placeholder="Direccion"
            value={data.direccion}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="nit"
            placeholder="Nit"
            value={data.nit}
            onChange={handleChange}
            maxLength="8"
          />
        </Form.Group>

        <button className="btn btn-success">Guardar</button>
      </Form>
    </Container>
  );
};

export default AddProv;
