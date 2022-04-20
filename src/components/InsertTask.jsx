import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const InsertTask = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <Button variant="primary" onClick={handleShow}>
            +
        </Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Nova Tarefa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" id="task-title" placeholder="Tarefa" autoComplete="off" />
                <input type="text" id="task-description" placeholder="Detalhes" autoComplete="off" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Fechar </Button>
                <Button variant="primary">Criar</Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default InsertTask;