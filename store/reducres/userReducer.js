import { UserActionType } from "@/constant";

const initialState = {
 data : [],
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case UserActionType.FETCH_USERS:
      return {
        ...state,
        userManagment: action.payload,
      };
    default:
      return state;
  }
};

export default userReducers;
