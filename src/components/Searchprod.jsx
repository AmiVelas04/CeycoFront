import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert";

export const Searchprod = ({ DevProd, Lista }) => {
  const URL = "producto/prodxcod";
  const getDataProd = async (cod) => {
    const response = await axios.get(URL + "/" + cod);
    try {
      //console.log(response.status);
      if (response.status === 200) {
        if ((await response).data.length > 0) {
          return response;
        } else {
          return 0;
        }
      } else if (response.status === 500) {
        Swal(
          "Error",
          "Error en la conexion 1, porfavor intente de nuevo",
          "error"
        );
      } else {
        Swal(
          "Error",
          "Error en la conexion 2, porfavor intente de nuevo",
          "error"
        );
      }
    } catch (error) {
      Swal(
        "Error",
        "Error en la conexion 3, porfavor intente de nuevo",
        "error"
      );
    }
  };

  const [codi, setCodi] = useState("");

  const handleChangeCod = (e) => {
    // console.log(e.target.value);
    setCodi(e.target.value);
  };

  const BuscaProd = () => {
    if (codi === "") {
      Swal("Sin ingreso", "No se ha ingresado ningun codigo", "warning");
      return;
    }
    getDataProd(codi).then((response) => {
      if (response != 0) {
        console.log(response.data);
        DevProd(response.data);
      } else {
        Swal(
          "Sin registro",
          "El producto que intenta buscar no posee registro",
          "warning"
        );
      }
    });
  };

  return (
    <Container>
      <Form>
        <Row>
          <Form.Group className="md-6 row">
            <Col xs lg="12">
              <Form.Label htmlFor="inputPassword5">
                Codigo del producto
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="id_cli"
                placeholder="Codigo"
                onChange={handleChangeCod}
                value={codi}
              />
            </Col>
            <Col xs lg="3">
              <Button
                className="btn btn-warnig mb-3"
                onClick={() => BuscaProd()}
              >
                Buscar
              </Button>
            </Col>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};
export default Searchprod;
