import React, { FC, useState, useEffect } from "react";
import List from "./List";
import { ITodo } from './../types/types';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodosPages: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }
    return (
        <List items={todos} renderItem={todo => <TodoItem key={todo.id} todo={todo} />} />
    )
}

export default TodosPages