import { UserActionType, actions, apiBaseUrl, serverApiBaseUrl } from "@/constant"
import axios from "axios";

export const fetchUserManagment = () => {
    return (dispatch) => {
        try {
            const res = axios.get(apiBaseUrl + actions.USERS);

            dispatch({ type: UserActionType.FETCH_USERS, payload: res.data })
        } catch (error) {
            console.log(error)
        }
    }
}