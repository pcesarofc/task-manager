import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Task from "./Task";

const Tasks = ({ taskmap }) => {
    const { task } = useContext(TaskContext);

    return <>{task.map((taskmap) => (<Task taskmap={taskmap} />))}</>
}

export default Tasks;