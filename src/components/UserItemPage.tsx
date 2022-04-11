import React, { FC, useState, useEffect } from "react";
import axios from 'axios';
import { IUser } from './../types/types';
import { useParams, useNavigate } from "react-router-dom";

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams();
    const navigate = useNavigate();

    function handleSubmit() {
        navigate('/users');
    }

    useEffect(() => {
      fetchUser()
    }, [])
  
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
        setUser(response.data)
      } catch (e) {
        alert(e)
      }
    }

    return (
        <div>
            <button onClick={handleSubmit}>Back to all users</button>
            <h1>{user?.name}</h1>
            <p>Email: {user?.email}</p>
            <p>Address: {user?.address.city}, {user?.address.street}, {user?.address.zipcode}</p>
        </div>
    )
}

export default UserItemPage