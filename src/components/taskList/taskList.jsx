import React from "react";
import AddTask from "../addTask/addTask.jsx";
import { useState } from 'react';

export const tasks = []

const backlogTasks = tasks.filter(tasks =>
    tasks.cat === 'Backlog'
);


export default function TaskList({ listName }) {

    return (
        <div className="taskList">
            <div className="taskList__wrapper">
                <h2 className="taskList__header">{listName}</h2>
                


                <AddTask />
            </div>
        </div>
    )
}