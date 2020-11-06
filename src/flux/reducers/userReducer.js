import { initialValues } from "../Store";

export const userTypes = {
    ADD_USER: 'ADD_USER',
    DEL_USER: 'DEL_USER',
    EDIT_USER: 'EDIT_USER',
}

export const userReducer = (state = initialValues, action) => {
    switch (action.type) {
        case userTypes.ADD_USER:
                return {
                    ...state,
                    users:[
                        ...state.users,
                        action.payload
                    ]
                }
    
        default:
            break;
    }
}