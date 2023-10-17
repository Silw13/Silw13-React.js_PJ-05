import React from "react";
import TaskList from "../taskList/taskList.jsx"

export default function Board() {
    return (
        <div className="container main-content">
            < TaskList
                listName={'Backlog'}
            />
            < TaskList
                listName={'Ready'}
            />
            < TaskList
                listName={'In Progress'}
            />
            < TaskList
                listName={'Finished'}
            />
        </div>
    )
}