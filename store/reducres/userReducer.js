import { UserActionType } from "@/constant";

const userReducers = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.FETCH_USERS:
      return {
        ...state,
        payload: action.payload
      }

    default:
      return state;
  }
};

export default userReducers;

