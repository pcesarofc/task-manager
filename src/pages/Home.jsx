import React, { useContext, useEffect, useState } from "react";
import InsertTask from "../components/InsertTask";
import { TaskContext } from "../contexts/TaskContext";
import Tasks from "../components/Tasks";


const Home = () => {
    const { task } = useContext(TaskContext);
    const [taskmap, setTaskMap] = useState([]);

    useEffect(() => {
        setTaskMap(task);
    }, [])

    return <main className="home-page">
        <h1 className="title-page">LISTA DE TAREFAS</h1>
        <article className="home-container">
            <section className="tasks-container">
                <Tasks taskmap={taskmap} />
            </section>
        </article>
        <InsertTask />
    </main>
}

export default Home;