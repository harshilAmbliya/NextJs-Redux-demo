import { UserActionType, actions, apiBaseUrl, serverApiBaseUrl } from "@/constant"
import axios from "axios";

export const fetchUserManagment = () => {
    return async (dispatch) => {
        try {

            const { data } = await axios.get(serverApiBaseUrl + actions.USERS);

            dispatch({ type: UserActionType.FETCH_USERS, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}
export const updateUser = (updateId, updatedUser) => {
    return async (dispatch) => {
        try {

            const { data } = await axios.put(`${serverApiBaseUrl}${actions.USERS}/${updateId}`, updatedUser);
            dispatch({ type: UserActionType.UPDATE_USERS, payload: { updatedUser: data } })
        } catch (error) {
            console.log(error)
        }
    }
}
export const deleteUser = (deleteId) => {
    return async (dispatch) => {
        try {

            const { data, status } = await axios.delete(`${serverApiBaseUrl}${actions.USERS}/${deleteId}`);
            dispatch({ type: UserActionType.DELETE_USERS, payload: { id: deleteId } })
        } catch (error) {
            console.log(error)
        }
    }
}