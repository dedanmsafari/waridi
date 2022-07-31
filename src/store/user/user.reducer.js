import { UserActionType } from "./user.actionTypes";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case UserActionType.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
