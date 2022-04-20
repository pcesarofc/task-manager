import { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {
    const [task, setTask] = useState([]);

    return <TaskContext.Provider value={{ task, setTask }}>
        {props.children}
    </TaskContext.Provider>
}