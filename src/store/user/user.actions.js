import { UserActionType } from "./user.actionTypes";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(UserActionType.SET_CURRENT_USER, user);

/*
    SET_CURRENT_USER: "user/SET_CURRENT_USER",
  GET_CURRENT_SESSION: "user/GET_CURRENT_SESSION",
  SIGN_IN_GOOGLE: "user/SIGN_IN_GOOGLE",
  SIGN_IN_EMAIL_PASSWORD: "user/SIGN_IN_EMAIL_PASSWORD",
  SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "USER/SIGN_IN_FAILED",
  */
export const signInGoogleStart = () =>
  createAction(UserActionType.SIGN_IN_GOOGLE);

export const signInWithEmailAndPasswordStart = (email, password) =>
  createAction(UserActionType.SIGN_IN_EMAIL_PASSWORD, { email, password });

export const signInSuccess = (user) =>
  createAction(UserActionType.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(UserActionType.SIGN_IN_FAILED, error);

export const checkUserSession = () =>
  createAction(UserActionType.CHECK_USER_SESSION);
