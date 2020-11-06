import React from 'react';
import { Link } from "react-router-dom";

export const Accueil = () => {
    return (
        <header>
            <h1>Poulet</h1>
            <Link to="/users">Liste d'utilisateurs</Link>

        </header>
    )
}
