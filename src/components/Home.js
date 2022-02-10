import React from "react";
import NavBar from "./NavBar";
import App from "../App";
import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import EditTodos from "./EditTodos";
import {Route, Link, Router, Routes} from 'react-router-dom';


function Home() {
    return (
      <div className="Home">
        
        <br/>
        <a> 👋 Hello! Please choose an option: </a>
        <br/>
        <br/>
        <NavBar />

        <Routes>

            <Route path="/Todos" element={<Todos />} />
            <Route path="/CreateTodo" element={<CreateTodo />} />
            <Route path="/EditTodos" element={<EditTodos />} />
            <Route path="/" exact element={<Home />} />
           
        </Routes>
        
            
      </div>
    );
  }
  
  export default Home;