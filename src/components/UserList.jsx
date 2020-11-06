import React, { useEffect, useContext } from 'react';
import { UserCard } from './UserCard';
import UserService from '../services/UserService';
import { UserContext } from '../context/UserContext';


const style = {
    flex:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
}

export const UserList = (props) => {

    const {users, setUsers} = useContext(UserContext)


    useEffect(() => {
        // effet a lancer
        refreshUser();
        console.log('Construction')
        return () => {
            console.log('Destruction')
            // actions à effectuer à la destruction du composant
        }
    },
    // dépendences à surveiller
    [])
    
    const refreshUser = () => {        
        UserService.getUsers().then(users =>setUsers(users));
    }

    const handleDelete = (user) => {
        UserService.deleteUser(user)
            .then(()=>{
                refreshUser();
            });
    }

    return (
        <div style={style.flex}>
            {users.length>0 ?
                users.map(user=><UserCard key={user.id} user={user} handleDelete={handleDelete} />)
        :
        <p>Aucun utilisateurs</p>
        }
        </div>
    )
}
