import { UserActionType, actions, apiBaseUrl, serverApiBaseUrl } from "@/constant"
import axios from "axios";

export const fetchUserManagment = () => {
    return async (dispatch) => {
        try {
            
            const { data } = await axios.get(apiBaseUrl + actions.USERS);

            dispatch({ type: UserActionType.FETCH_USERS, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}