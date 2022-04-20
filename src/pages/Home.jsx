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
        <InsertTask />
        <article className="home-container">
            <section className="tasks-container">
                <Tasks taskmap={taskmap} />
            </section>
        </article>
    </main>
}

export default Home;