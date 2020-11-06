import React, {useState} from 'react';
import UserService from '../services/UserService';

// création du context
export const UserContext = React.createContext();


export const UserProvider = (props) =>{

    // éléments a partager

    const [users, setUsers] = useState([]);

    const refreshUsers = () => {
        UserService.getUsers().then(users =>setUsers(users));
    }

    return (
        <UserContext.Provider value={{users, setUsers, refreshUsers}}>
            {props.children}
        </UserContext.Provider>
    )
}