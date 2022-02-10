import React from "react";
import CreateTodo from "./CreateTodo";
import Todos from "./Todos";
import App from "../App";
import {Link} from 'react-router-dom';
import './NavBar.css';

function Navbar() {
    return(
        <div className="nav">
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/CreateTodo">CreateTodo</Link>
            </li>
            <li>
                <Link to="/Todos">Todos</Link>
            </li>
            <li>
                <Link to="/EditTodos">Edit</Link>
            </li>
        </div>
    )
}

export default Navbar;