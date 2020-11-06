import React, { useState, useContext } from 'react'
import { Modal } from './Modal';
import { UserForm } from './UserForm';
import UserService from '../services/UserService';
import { UserContext } from '../context/UserContext';

const style = {
    card: {
        margin: '1%'
    },
    cardHeader: {
        fontSize: 'x-large'
    },
    cardBody: {

    },
    delete: {
        backgroundColor: "red",
        color: "whitesmoke",
        border: "1px solid red",
        borderRadius: "0.25em",
        float: "right"
    }
}

export const UserCard = (props) => {

    const [visible, setVisible] = useState(false);
    const [editUser, setEditUser] = useState(props.user);

    const {refreshUsers} = useContext(UserContext)

    const toggleVisible = () => {
        setVisible(!visible);
    }

    const handleChange = (event) => {
        setEditUser({...editUser, [event.target.name]:event.target.value});
    }

    const handleEdit = () => {
        UserService.updateUser(editUser)
            .then(()=>refreshUsers());
    }

    const user = props.user;
    return (
        <div style={style.card}>
            <div style={style.cardHeader}>
                {user.name}
                {
                    props.handleDelete &&
                    <button style={style.delete} onClick={() => props.handleDelete(user)}>&times;</button>
                }
                <Modal
                    visible={visible}
                    toggleVisible={toggleVisible}
                    modalText="Editer"
                >
                    <UserForm
                        user={editUser}
                        handleChange={handleChange}
                        handleSubmit={handleEdit}
                    />
                </Modal>
            </div>
            <hr />
            <div style={style.cardBody}>
                <ul>
                    <li>username: {user.username}</li>
                    <li>email: <a href={'mailto:' + user.email}>{user.email}</a></li>
                    <li>phone: <a href={'tel:' + user.phone}>{user.phone}</a></li>
                    <li>website: <a href={user.website} target="_blank" rel="noreferrer">{user.website}</a></li>
                </ul>
            </div>
        </div>
    )
}
