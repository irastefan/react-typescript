import React, { FC, useState, useEffect } from "react";
import axios from 'axios';
import { IUser } from './../types/types';
import UserList from "./UserList";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
  
    useEffect(() => {
      fetchUsers()
    }, [])
  
    async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users/');
        setUsers(response.data)
      } catch (e) {
        alert(e)
      }
    }

    return (
        <UserList users={users} />
    )
}

export default UsersPage