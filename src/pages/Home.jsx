import React, { useContext, useEffect, useState } from "react";
import InsertTask from "../components/InsertTask";
import Task from "../components/Task";
import { TaskContext } from "../contexts/TaskContext";

const Home = () => {
    const { task } = useContext(TaskContext);
    const [taskmap, setTaskMap] = useState([]);

    useEffect(() => {
        setTaskMap(task);
    }, [])

    return <main className="home-page">
        <InsertTask />
        <article className="home-container">
            <section className="tasks-container">
                {task.map((taskmap) => (<Task taskmap={taskmap} />))}
            </section>
        </article>
    </main>
}

export default Home;