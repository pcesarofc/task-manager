import React, { useContext, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { TaskContext } from '../contexts/TaskContext';
import { BsFillTrashFill } from 'react-icons/bs'

const Task = ({ taskmap }) => {

    const { task, setTask } = useContext(TaskContext);
    var check = taskmap.status

    function deleteTask() {
        var newTask = task.filter((task) => task.title !== taskmap.title);
        var confirmDelete = window.confirm("Você tem certeza?");
        if (confirmDelete == true) {
            setTask(newTask)
        }
    }

    return <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1" >
            <Accordion.Header >
                <div id={taskmap.status} className="task-status" />
                <p>{taskmap.title}</p>
                <div className="button-delete" onClick={deleteTask}><BsFillTrashFill /></div>
            </Accordion.Header>
            <Accordion.Body>
                <p>{taskmap.description}</p>
                <input type="checkbox" name="status-task" id="status-task" />
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
}

export default Task;