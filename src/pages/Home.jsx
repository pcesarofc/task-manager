import React from "react";
import InsertTask from "../components/InsertTask";
import Task from "../components/Task";

const Home = () => {
    return <main className="home-page">
        <InsertTask />
        <article className="home-container">
            <section className="tasks-container">
                <Task />
            </section>
        </article>
    </main>
}

export default Home;