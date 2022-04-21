import React, { useContext, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { TaskContext } from '../contexts/TaskContext';
import { BsFillTrashFill } from 'react-icons/bs';

const Task = ({ taskmap }) => {

    const { task, setTask } = useContext(TaskContext);

    function deleteTask() {
        var newTask = task.filter((task) => task.title !== taskmap.title);
        var confirmDelete = window.confirm("Você tem certeza?");
        if (confirmDelete == true) {
            setTask(newTask)
        }
    }

    function completeTask() {
        var newTask = task;
        var i;

        for (i in task) {
            if (newTask[i].title === taskmap.title) {
                newTask[i].status = !taskmap.status
            }
        }

        setTask(newTask)
    }


    return <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1" >
            <Accordion.Header >
                <div className="task-status" style={taskmap.status ? { backgroundColor: 'green' } : { backgroundColor: 'red' }} />
                <p>{taskmap.title}</p>
                <p>{taskmap.id}</p>
                <div className="button-delete" onClick={deleteTask}><BsFillTrashFill /></div>
            </Accordion.Header>
            <Accordion.Body>
                <p>{taskmap.description}</p>
                <div className="status">
                    <p>Concluir:</p>
                    <input type="checkbox" name="status-task" id="status-task" onChange={completeTask} />
                </div>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
}

export default Task;