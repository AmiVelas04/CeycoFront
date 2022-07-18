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

import { ListaUsu } from "./ListaUsu";

export const Usu = () => {
  const URL = "/usuario/usurol";
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
  const handleOpenModal = () => {
    setshowModal(true);
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
  return (
    <Container>
      <ListaUsu
        Usuario={list}
        handleClosemodal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        setDataModal={setDataModal}
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
                name="representante"
                placeholder="Representante"
                value={dataModal.representante}
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
                name="nit"
                placeholder="Nit"
                value={dataModal.nit}
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
                name="correo"
                placeholder="Correo"
                value={dataModal.correo}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="facebook"
                placeholder="Facebook"
                value={dataModal.facebook}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" onclick={handleCloseModal}>
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
