import React, { useReducer } from 'react';
// reducers
import { userReducer } from './reducers/userReducer';

// valeurs initiales
export const initialValues = {users:[], posts:[]}

// création du context
export const StoreContext = React.createContext();

export const StoreProvider = (props) => {
    // éléments a partager

    // utilisation du reducer
    const [state, dispatch] = useReducer(userReducer, initialValues)

    return (
        <StoreContext.Provider value={{state, dispatch, initialValues}}>
            {props.children}
        </StoreContext.Provider>
    )

}