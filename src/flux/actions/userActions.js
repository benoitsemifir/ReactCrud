import { userTypes } from "../reducers/userReducer";

export const useUserActions = (state, dispatch) => {
    const addUser = (data) => {
        dispatch({ type: userTypes.ADD_USER, payload: data })
    }

    return {
        addUser
    }
}