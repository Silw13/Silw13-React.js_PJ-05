import React from "react";
import UserMenu from "../userMenu/userMenu"


export default function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <h1 className="kanbanName">Awesome Kanban Board</h1>
                <UserMenu />
            </div>
        </header>
    );
}