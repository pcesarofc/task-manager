import React, { useContext, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { TaskContext } from '../contexts/TaskContext';

const Task = ({ taskmap }) => {

    const { task, setTask } = useContext(TaskContext);

    function deleteTask() {
        var newTask = task.filter((task) => task.title !== taskmap.title);
        setTask(newTask)
    }

    return <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1" >
            <Accordion.Header >
                <div id={taskmap.status} />
                <p>{taskmap.title}</p>
                <input type="button" value="Deletar" onClick={deleteTask} />
            </Accordion.Header>
            <Accordion.Body>
                {taskmap.description}
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
}

export default Task;