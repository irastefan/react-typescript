import React, { FC, useState, useEffect } from "react";
import axios from 'axios';
import { ITodo } from './../types/types';
import { useParams, useNavigate } from "react-router-dom";

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null);
    const params = useParams();
    const navigate = useNavigate();

    function handleSubmit() {
        navigate('/todos');
    }

    useEffect(() => {
      fetchTodo()
    }, [])
  
    async function fetchTodo() {
      try {
        const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id);
        setTodo(response.data)
      } catch (e) {
        alert(e)
      }
    }

    return (
        <div>
            <button onClick={handleSubmit}>Back to all todos</button>
            <h1>{todo?.title}</h1>
            <p>{todo?.completed}</p>
        </div>
    )
}

export default TodoItemPage