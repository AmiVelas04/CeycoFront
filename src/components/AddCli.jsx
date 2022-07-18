import axios from "axios";
import React, { useState } from "react";
import { Container, Form, FormSelect } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";

export const AddCli = () => {
  const [data, setData] = useState({
    id_cli: "",
    nombre: "",
    negocio: "",
    direccion: "",
    telefono: "",
  });
  const history = useNavigate();
  const handleChange = ({ target }) => {
    // console.log("ejecutando agregar cliente");
    setData({
      ...data,
      [target.name]: target.value,
    });
  };
  const URL = "cliente";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, data);

      if (response.status == 200) {
        await Swal(
          "Guardado",
          "El cliente " + response.data.nombre + " ha sido guardado",
          "success"
        );
        history("/cli");
      } else if (response.status == 500) {
        await Swal("No guardado", "El cliente no pudo ser guardado", "error");
      }
    } catch (error) {
      console.log(data);
      await Swal(
        "No guardado",
        "El cliente no pudo ser guardado, verifique el estado del servidor" +
          error,
        "error"
      );
    }

    // console.log(response.status);
  };
  return (
    <Container>
      <h1 className="text-center">Ingresar nuevo cliente</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="id_cli"
            placeholder="Codigo del cliente"
            value={data.id_cli}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={data.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="negocio"
            placeholder="Negocio"
            value={data.negocio}
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
            name="telefono"
            placeholder="Telefono"
            value={data.telefono}
            onChange={handleChange}
            maxLength="8"
            required
          />
        </Form.Group>

        <button className="btn btn-success">Guardar</button>
      </Form>
    </Container>
  );
};

export default AddCli;
