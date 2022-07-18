import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Form, FormSelect } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";

export const AddProd = () => {
  const URLget1 = "/usuario/roles";
  const URLpost1 = "/usuario";
  const URLpost2 = "/usuario/saveru";

  const getRoles = async () => {
    const response = axios.get(URLget1);
    return response;
  };

  const [data, setData] = useState({
    id_usu: "",
    nombre: "",
    direccion: "",
    telefono: "",
    usu: "",
    pass: "",
  });

  const [rol, setRol] = useState({
    id_rol: "1",
    id_usu: "",
  });

  const [roles, setRoles] = useState([]);

  const history = useNavigate();
  useEffect(() => {
    //usefect body
    getRoles().then((response) => {
      //hacer alggo con esa respuesta
      setRoles(response.data);
      //console.log(response.data);
    });
  }, []);

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleChangeRol = (e) => {
    e.preventDefault();
    setRol({ ["id_rol"]: rol.id_rol, ["id_usu"]: data.id_usu });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setRol({ ["id_rol"]: rol.id_rol, ["id.usu"]: data.id_usu });
    console.log(data);
    console.log(rol);

    try {
      const response1 = await axios.post(URLpost1, data);
      const response2 = await axios.post(URLpost2, rol);

      if (response1.status == 200 && response2.status == 200) {
        await Swal(
          "Guardado",
          "El Usuario " + response1.data.nombre + " ha sido guardado",
          "success"
        );
        history("/usu");
      } else if (response1.status == 500) {
        Swal("No guardado", "El Usuario no pudo ser guardado", "error");
      }
    } catch (error) {
      Swal(
        "No guardado",
        "El Usuario no pudo ser guardado, verifique el estado del servidor",
        "error"
      );
      console.log(error);
    }

    // console.log(response.status);
  };
  return (
    <Container>
      <h1 className="text-center">Ingresar nuevo Usuario</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="id_usu"
            placeholder="Codigo"
            value={data.id_usu}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre del usuario"
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
            name="telefono"
            placeholder="Telefono"
            value={data.telefono}
            onChange={handleChange}
            maxLength="8"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="usu"
            placeholder="Nombre del usuario"
            value={data.usu}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="pass"
            placeholder="Contrasenia"
            value={data.pass}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            onChange={handleChangeRol}
          >
            {roles.map((dato) => (
              <option className="form-group" value={dato.id_rol}>
                {dato.nombre}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <button className="btn btn-success">Guardar</button>
      </Form>
    </Container>
  );
};

export default AddProd;
