import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";

import {
  signInSuccess,
  signOutUserSuccess,
  signOutUserFailed,
  signUpFailed,
  signInFailed,
} from "./user.actions";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutUserSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }
  if (
    signOutUserFailed.match(action) ||
    signUpFailed.match(action) ||
    signInFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
