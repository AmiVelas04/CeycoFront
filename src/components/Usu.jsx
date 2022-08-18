import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  Table,
} from "react-bootstrap";
import Swal from "sweetalert";

import { ListaUsu } from "./ListaUsu";

export const Usu = () => {
  const URL = "/usuario/usurol";
  const URLUPD = "/usuario/update";
  const getData = async () => {
    const response = axios.get(URL);
    // console.log(URL);
    return response;
  };
  const [list, setList] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [dataModal, setDataModal] = useState([]);
  const handleCloseModal = () => {
    setshowModal(false);
  };
  const handleOpenModal = (datos) => {
    setshowModal(true);
    setDataModal(datos);
  };
  const handleChangeModal = ({ target }) => {
    setDataModal({
      ...dataModal,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    //usefect body
    getData().then((response) => {
      //hacer alggo con esa respuesta
      setList(response.data);
      console.log(response.data);
    });
  }, []);

  const handleSave = async (e) => {
    // alert(dataModal);
    const response = await axios.put(URLUPD, dataModal);
    try {
      if (response.status === 200) {
        await Swal(
          "Actualizado",
          "El usuario ha sido actualizado con exito",
          "Success"
        );
      } else {
        await Swal(
          "No actualizado",
          "El usuario no pudo ser actualizado",
          "error"
        );
      }
    } catch (error) {
      await Swal(
        "No Actualizado",
        "El usuario no pudo ser actualizado, verifique el estado del servidor" +
          error,
        "error"
      );
    }
  };
  return (
    <Container>
      <ListaUsu
        Usuario={list}
        HandleCerrarMod={handleCloseModal}
        HandleAbrirMod={handleOpenModal}
        setDataMod={setDataModal}
      />

      <Modal show={showModal} onhide={handleCloseModal}>
        <Modal.Header>
          <ModalTitle>Actualizar Datos</ModalTitle>
        </Modal.Header>
        <Form>
          <ModalBody>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="id_cuenta"
                placeholder="Codigo"
                value={dataModal.id_cuenta}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={dataModal.nombre}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="direccion"
                placeholder="Direccion"
                value={dataModal.direccion}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="telefono"
                placeholder="Telefono"
                value={dataModal.telefono}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="usuario"
                placeholder="Usuario"
                value={dataModal.usuario}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="pass"
                placeholder="Conraseña"
                value={dataModal.pass}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" onclick={handleSave}>
              Guardar cambios
            </button>
            <button className="btn btn-danger" onClick={handleCloseModal}>
              Cerrar
            </button>
          </ModalFooter>
        </Form>
      </Modal>
    </Container>
  );
};

export default Usu;
