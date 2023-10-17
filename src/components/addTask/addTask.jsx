import React from "react";
import { useState } from 'react';
import TaskList, { tasks } from "../taskList/taskList.jsx"

export default function AddTask() {
    const [showForm, setShowForm] = useState(false);
    const handleAddTaskButton = () => {
        setShowForm(!showForm);
    };

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const [index, setIndex] = useState(0);

    const handleSubmit = (event) => {
        // Проверить на пустоту 
        event.preventDefault();
        tasks.push({
            title: inputValue,
            cat: 'Backlog',
            id: index,
            name: '',
            description: "Fix all the bugs"
        })
        setIndex(index + 1);
        console.log(inputValue); // Выводим значение в консоль 
        setShowForm(!showForm)
        console.log(tasks)

        setInputValue('');
    };


    if (showForm) {
        return (
            <form className="addTaskForm" onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
        )
    } else {
        return (
            <button className="addTaskButton" onClick={handleAddTaskButton}>+ Add Card</button>
        )
    }
}

