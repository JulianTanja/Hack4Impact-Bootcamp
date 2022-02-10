import './App.css';
import React from 'react';
import Home from './components/Home';
import {Route, Link, Router} from 'react-router-dom';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <Home />
      
    </div>
  );
}

export default App;
