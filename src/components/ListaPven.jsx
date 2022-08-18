import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Button,
  FormLabel,
  Row,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from "react-bootstrap";

export const ListaPven = ({ prods, handleElim, Edita }) => {
  const [precio, setPrecio] = useState("0");
  const [canti, setCanti] = useState("0");
  const [Lprods, setLprods] = useState([]);
  const [dataModal, setDataModal] = useState([]);
  const [showModal, setshowModal] = useState(false);

  const handleOpenModal = (id, canti, precios) => {
    var cambi = { id, canti, precios };
    setshowModal(true);
    setDataModal(cambi);
  };

  const handleCloseModal = (e) => {
    setshowModal(false);
    setPrecio(dataModal.precio);
    setCanti(dataModal.cant);
    //handleCamb(dataModal.id, dataModal.canti, dataModal.precios);
  };

  const handleChangeModal = ({ target }) => {
    setDataModal({
      ...dataModal,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
  };

  /*const handleEliminarprod = (indice) => {
    prods.splice(indice);
    setProdu(prods);
  };*/

  /* const handleEditar = (id) => {
    Lprods.map((datos) => {
      if (datos.id_prod === id) {
        datos.cantidad = precio;
        datos.pven = canti;
      }
    });
  };*/

  const handleSave = () => {
    Edita(dataModal.id, dataModal.canti, dataModal.precios);

    setshowModal(false);
  };

  const handleId = (valor) => {
    let resp = "";
    valor.map((val) => {
      resp = val.id_prod;
    });
    return resp;
  };

  const handleNom = (valor) => {
    let resp = "";
    valor.map((val) => {
      resp = val.nombre;
    });
    return resp;
  };
  const handleDesc = (valor) => {
    let resp = "";
    valor.map((val) => {
      resp = val.descip;
    });
    return resp;
  };

  const handlePre = (valor) => {
    let resp = "";
    valor.map((val) => {
      resp = val.pven;
    });
    return resp;
  };

  const handleCant = (valor) => {
    let resp = "";
    valor.map((val) => {
      resp = val.cantidad;
    });
    return resp;
  };

  const handleTot = (valor) => {
    let n1 = 0,
      n2 = 0,
      tot = 0;

    valor.map((val) => {
      n1 = val.pven;
      n2 = val.cantidad;
      tot = n1 * n2;
      // console.log(n1, n2, tot);
    });
    return tot;
  };

  const totGen = () => {
    let tot = 0;

    Lprods.map((item, index) => {
      tot = tot + handleTot(item);
    });
    return tot;
  };

  useEffect(() => {
    setLprods(prods);
    console.log(Lprods);
  }, []);

  return (
    <Container>
      <div>
        <h1 className="text-center"> Venta</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Codigo</th>
              <th>Producto</th>
              <th>Descripcion</th>
              <th>Precio de venta</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>

          {Lprods.map((p, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{handleId(p)}</td>
                <td>{handleNom(p)}</td>
                <td>{handleDesc(p)}</td>
                <td>{handlePre(p)}</td>
                <td>{handleCant(p)}</td>
                <td>{handleTot(p)}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() =>
                      handleOpenModal(handleId(p), handleCant(p), handlePre(p))
                    }
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleElim(index)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      <div>
        <Row className="md-10 offset-1">
          <h3>
            <FormLabel className="md-3 offset-9">Total Q.{totGen()}</FormLabel>
          </h3>
        </Row>
        <Row className="md-10 offset-1">
          <Button size="lg" variant="success">
            Realizar Venta
          </Button>
        </Row>
      </div>

      <Modal show={showModal} onhide={handleCloseModal}>
        <Modal.Header>
          <ModalTitle>Cambiar Valores</ModalTitle>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="id_prod"
                placeholder="Codigo de producto"
                value={dataModal.id}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="precios"
                placeholder="Precio"
                value={dataModal.precios}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="canti"
                placeholder="Cantidad"
                value={dataModal.canti}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" onClick={() => handleSave()}>
              Guardar cambios
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setshowModal(false)}
            >
              Cerrar
            </button>
          </ModalFooter>
        </Form>
      </Modal>
    </Container>
  );
};

export default ListaPven;
