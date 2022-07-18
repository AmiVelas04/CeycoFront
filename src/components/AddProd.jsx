import axios from "axios";
import React, { useState } from "react";
import { Container, Form, FormSelect } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";

export const AddProd = () => {
  const [data, setData] = useState({
    id: "",
    nombre: "",
    descrip: "",
    costo: "",
    pmin: "",
    pven: "",
    cantidad: "",
    caduc: "",
  });
  const history = useNavigate();
  const handleChange = ({ target }) => {
    //console.log("ejecutando agregar cliente");
    setData({
      ...data,
      [target.name]: target.value,
    });
  };
  const URL = "Producto";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, data);
      if (response.status == 200) {
        await Swal(
          "Guardado",
          "El producto " + response.data.nombre + " ha sido guardado",
          "success"
        );
        history("/prod");
      } else if (response.status == 500) {
        Swal("No guardado", "El producto no pudo ser guardado", "error");
      }
    } catch (error) {
      Swal(
        "No guardado",
        "El producto no pudo ser guardado, verifique el estado del servidor" +
          error,
        "error"
      );
    }

    // console.log(response.status);
  };
  return (
    <Container>
      <h1 className="text-center">Ingresar nuevo producto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="id_prod"
            placeholder="Codigo"
            value={data.id_cuenta}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Producto"
            value={data.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="descrip"
            placeholder="Descripcion"
            value={data.representante}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="costo"
            placeholder="Costo del producto"
            value={data.direccion}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="pmin"
            placeholder="Precio minimo de venta"
            value={data.nit}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="pven"
            placeholder="Precio de venta"
            value={data.telefono}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="cantidad"
            placeholder="Cantidad"
            value={data.correo}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="date"
            name="caduc"
            placeholder="fecha de caducidad"
            value={data.facebook}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <button className="btn btn-success">Guardar</button>
      </Form>
    </Container>
  );
};

export default AddProd;
