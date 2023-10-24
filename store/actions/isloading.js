import { constants } from "@/constant"

export const isLoading = (loading) => {
    return {
        type: constants.IS_LOADING,
        payload: loading
    }
}