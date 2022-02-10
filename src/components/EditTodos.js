
import CreateTodo from "./CreateTodo";
import Todos from "./Todos";
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Route, Link, Router, Routes} from 'react-router-dom';
import './EditTodos.css';


const EditTodos = () => {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [todoEditing, setTodoEditing] = useState(null)
    const [editingText, setEditingText] = useState('')

    //Updating todo list
    useEffect( () => {
        fetch("http://localhost:3001/todos")
        .then(res => {
            if(res.ok){
                return res.json()
            }
        })
        .then(jsonRes => {
            setTodos(jsonRes)
        })
        .catch(err => console.log(err))
    }, [todos])


    //Editing items
    const handleEdit = id => {
        console.log("edit mode activated")
        const updatedTodos = [...todos].map((todos) => {
            if (todos.id === id) {
                todos.text = editingText
            }
        })
        setTodos(updatedTodos)
         

    }

    function editTodo(id) {
        const updatedTodos = [... todos].map((todo) => {
            if(todo.id === id) {
                todo.text = editingText
            }
            return todo
        })
        setTodos(updatedTodos)
        setTodoEditing(null)
        setEditingText("")
    }

    return <div>
                <h1 className="title2">My To-do Page</h1>
                <div>
                {
                todos.length > 0 ?
                todos.map(todo => (
                    <div key={todo._id}>
                    {todoEditing === todo.id ? (<input
                        type="text"
                        onChange={(e) => setEditingText(e.target.value)}
                        value={editingText}
                        />) 
                        
                        : 
                        
                        (<div>{todo.text}</div>)}
                    
                        <p>{todo.task}</p>
                        <button onClick={ () => 
                            setTodoEditing(todo.id)
                        }>Edit Todo</button>

                        <button onClick={() => editTodo(todo.id)}>Submit Edit</button>
                    </div>
                ))

                : 

                <h3 className="fail">No Todos to show 🙁 </h3>
                }
            </div>
    </div>

}


export default EditTodos;

