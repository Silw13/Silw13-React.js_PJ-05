import React from "react";
import UserMenu from "../userMenu/userMenu"
import { useState } from 'react';



export default function Header() {
    return (    
        <div className='header'>
            <div className='header__container'>
                <h1>Awesome Kanban Board</h1>
                <UserMenu />
            </div>
        </div>
    );
}