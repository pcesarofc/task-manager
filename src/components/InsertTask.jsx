import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { TaskContext } from '../contexts/TaskContext'

const InsertTask = () => {

    const { task, setTask } = useContext(TaskContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addTask() {
        var newTasks = []
        newTasks = [...task, {
            title: document.getElementById('task-title').value,
            description: document.getElementById('task-description').value,
            status: false,
        }]

        setTask(newTasks);
        setShow(false);
    }

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
                <textarea type="text" id="task-description" placeholder="Detalhes" autoComplete="off" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Fechar </Button>
                <Button variant="primary" onClick={addTask}>Criar</Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default InsertTask;