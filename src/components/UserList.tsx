import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/types";
import Card, { CardVariant } from "./Card";

interface UserListProps {
    users: IUser[];
}

const UserList:FC<UserListProps> = ({users}) => {

    const navigate = useNavigate()

    return (
        <div>
            {users.map(user => 
                <Card onClick={() => navigate('/users/' + user.id)} key={user.id} 
                    variant={CardVariant.primary} 
                    width="200px" height="130px">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.address.city}</p>
                </Card>
            )}
        </div>
    )
}

export default UserList