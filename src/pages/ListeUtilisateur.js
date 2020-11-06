import React, { useState, useContext } from "react";
import { UserList } from "../components/UserList";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";
import { UserForm } from "../components/UserForm";
import { User } from "../models/User";
import { Modal } from "../components/Modal";
// import { UserContext } from "../context/UserContext";
// import {  } from "../flux/actions/userActions";
import { StoreContext } from "../flux/Store";
import { userTypes } from "../flux/reducers/userReducer";

export const ListeUtilisateur = () => {

    const [ok, setOk] = useState(false);

    const [newUser, setNewUser] = useState(new User());
    const [visible, setVisible] = useState(false);

    // const { refreshUsers} = useContext(UserContext)
    const { dispatch } = useContext(StoreContext)


    const toggle = () => {
        setOk(!ok);
    }

    const toggleVisible = () => {
        setVisible(!visible);
    }

    const handleChange = (event) => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value })
    }


    const handleSubmit = () => {
        dispatch({type:userTypes.ADD_USER, payload: newUser})
        // UserService.addUser(newUser)
        //     .then(()=>{
        //         toggleVisible();
        //         refreshUsers();
        //         })
    }

    return (
        <>
            <header>
                <h1>Liste d'utilisateur</h1>
                <Link to="/accueil">Accueil</Link>
            </header>
            <main>
                <Modal
                    visible={visible}
                    modalText="Ajouter un utilisateur"
                    toggleVisible={toggleVisible}
                >
                    <UserForm
                        user={newUser}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </Modal>
                <button onClick={toggle}>Action</button>
                <UserList/>
            </main>
        </>
    )
}