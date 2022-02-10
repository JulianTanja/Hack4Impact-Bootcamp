import axios from 'axios';
import React, {useState, useEffect} from 'react';
import CreateTodo from './CreateTodo';
import './Todos.css';

const Todos = () => {
    const [todos, setTodos] = useState([])
    

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


    //Deleting todo items
    const handleDelete = id => {
        axios.delete("http://localhost:3001/delete/" + id)
    }

    //Editing todo items
    //const handleUpdate = (id, newValue) => {
    //    setTodos(prev => prev.map(item => (item.id === id ? newValue : item)))
    //}

    //const submitUpdate = val => {
    //
    //}

    //if (todo.id) {
    //    return <CreateTodo 
    //}

    return <div>
        <h1 className="title">My To-do Page</h1>
        <div>
            {
                todos.length > 0 ?
                todos.map(todo => (
                    <div key={todo._id} className="test">
                        <p>{todo.task}</p>
                        <button onClick={ () => {
                            handleDelete(todo._id)
                        }}>Delete Todo</button>

                    </div>
                ))

                : 

                <h3 className="fail">No Todos to show 🙁 </h3>
            }
        </div>
    </div>
}

export default Todos;