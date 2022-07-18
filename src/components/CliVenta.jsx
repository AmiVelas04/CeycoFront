import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import axios from "axios";

export const CliVenta = () => {
  const URLget1 = "/Cliente/Todos";
  const getCli = async () => {
    const response = axios.get(URLget1);
    return response;
  };
  const [cli, setCli] = useState("1");
  const [clientes, setClientes] = useState([]);

  const handleChangeCli = (e) => {
    e.preventDefault();
    setCli(e.value);
  };
  useEffect(() => {
    //usefect body
    getCli().then((response) => {
      //hacer alggo con esa respuesta
      setClientes(response.data);
      //console.log(response.data);
    });
  }, []);
  return (
    <Container>
      <div>
        <h1></h1>
        <Form>
          <Form.Group className="mb-3">
            <FormLabel>Cliente</FormLabel>
            <Form.Select
              aria-label="Default select example"
              onChange={handleChangeCli}
            >
              {clientes.map((dato) => (
                <option className="form-group" value={dato.id_rol}>
                  {dato.nombre}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
export default CliVenta;
