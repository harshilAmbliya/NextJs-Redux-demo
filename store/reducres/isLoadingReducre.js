import { constants } from "@/constant";


export const isLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case constants.IS_LOADING:
            return action.payload
        default:
            return state
    }
}