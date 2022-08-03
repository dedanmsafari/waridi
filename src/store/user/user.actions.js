import { UserActionType } from "./user.actionTypes";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(UserActionType.SET_CURRENT_USER, user);

export const signInGoogleStart = () =>
  createAction(UserActionType.SIGN_IN_GOOGLE);

export const signOutUserStart = () => {
  createAction(UserActionType.SIGN_OUT_START);
};
export const signOutUserSuccess = (user) => {
  createAction(UserActionType.SIGN_OUT_SUCCESS, user);
};
export const signOutUserFailed = (error) => {
  createAction(UserActionType.SIGN_OUT_FAILED, error);
};

export const signInWithEmailAndPasswordStart = (email, password) =>
  createAction(UserActionType.SIGN_IN_EMAIL_PASSWORD, { email, password });

export const signUpWithEmailAndPasswordStart = (email, password, displayName) =>
  createAction(UserActionType.SIGN_UP_EMAIL_PASSWORD, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(UserActionType.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signInSuccess = (user) =>
  createAction(UserActionType.SIGN_IN_SUCCESS, user);

export const signUpFailed = (error) =>
  createAction(UserActionType.SIGN_UP_FAILED, error);

export const signInFailed = (error) =>
  createAction(UserActionType.SIGN_IN_FAILED, error);

export const checkUserSession = () =>
  createAction(UserActionType.CHECK_USER_SESSION);
