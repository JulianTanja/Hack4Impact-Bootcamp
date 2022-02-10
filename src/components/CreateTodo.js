import React, {useState} from 'react'
import axios from "axios"
import './CreateTodo.css';

const CreateTodo = () => {
    const [todo, setTodo] = useState({
        task: ''
    })

    const handleChange = e => {
        const {name, value} = e.target
        setTodo(prevInput => {
            return {
                ...prevInput, 
                [name]: value
            }
        })
    }

    const handleClick = e => {
        e.preventDefault();

        let newTodo = {
            task: todo.task
        }

        axios.post("http://localhost:3001/create", newTodo)

        setTodo( () => {
            return {
                task: ""
            }
        })
    }

    return <div className="create_todo">
        <h1 className="create">Create a to-do: </h1>
        {
            <form action="">
                <label htmlFor="task" className="Task">Task: </label>
                <input type="text" onChange={handleChange} name="task" value={todo.task || ''} 
                placeholder="Enter text here" />
                <button onClick={handleClick}>Add task</button>
            </form>
        }
    </div>
}

export default CreateTodo;