import React, { useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";

export const ListaCli = ({
  cliente,
  handleOpenModal,
  handleCloseModal,
  setDataModal,
}) => {
  const handleEditar = (datos) => {
    handleCloseModal();
    setDataModal(datos);
  };

  return <Container></Container>;
};

export default ListaCli;
