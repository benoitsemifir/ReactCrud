import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Accueil } from "../pages/Accueil";
import { ListeUtilisateur } from '../pages/ListeUtilisateur';

export const Routing = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact path='/' to='/accueil'/>
                <Route path='/accueil'>
                    <Accueil/>
                </Route>
                <Route path='/users'>
                    <ListeUtilisateur/>
                </Route>
            </Switch>
        </Router>
    )
}
