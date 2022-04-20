import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Task from "./Task";

const Tasks = ({ taskmap }) => {
    const { task } = useContext(TaskContext);

    return <div className="tasks">{task.map((taskmap) => (<Task taskmap={taskmap} />))}</div>
}

export default Tasks;