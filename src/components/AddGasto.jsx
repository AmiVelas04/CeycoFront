import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";

export const AddGasto = () => {
  const URL = "Gasto/save";
  const URLCant = "gasto/codcant";
  const URLCODMAX = "gasto/codMax";
  const [data, setData] = useState({
    id_gasto: "",
    descrip: "",
    fecha: "",
    monto: "",
    estado: "Activo",
  });
  const history = useNavigate();

  const codgast = async () => {
    const idgastcont = await axios.get(URLCant);
    let id = "";
    if (idgastcont.data == 0) {
      id = "1";
    } else {
      const idcodmax = await axios.get(URLCODMAX);
      let ids = idcodmax.data;
      ids = ids++;
      id = ids;
    }
    return id;
    // console.log(id);
  };
  const handleChange = ({ target }) => {
    // console.log("ejecutando agregar cliente");

    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id;
    id = await codgast();
    setData({
      ["id_gasto"]: id,
      ["descrip"]: data.descrip,
      ["fecha"]: data.fecha,
      ["monto"]: data.monto,
      ["estado"]: "Activo",
    });
    console.log(data);
    try {
      const response = await axios.post(URL, data);

      if (response.status == 200) {
        await Swal(
          "Guardado",
          "El gasto ha sido registrado con exito",
          "success"
        );
        //  history("/cli");
      } else if (response.status == 500) {
        await Swal("No guardado", "El gasto no pudo ser guardado", "error");
      }
    } catch (error) {
      await Swal(
        "No guardado",
        "El gasto no pudo ser guardado, verifique el estado del servidor" +
          error,
        "error"
      );
    }
  };

  return (
    <Container>
      <h1 className="text-center">Ingresar nuevo gasto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="descrip"
            placeholder="Descripcion del gasto"
            value={data.descip}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="date"
            name="fecha"
            placeholder="Fecha del gasto"
            value={data.fecha}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            name="monto"
            placeholder="Monto del gasto"
            value={data.monto}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <button className="btn btn-success">Guardar</button>
      </Form>
    </Container>
  );
};

export default AddGasto;
