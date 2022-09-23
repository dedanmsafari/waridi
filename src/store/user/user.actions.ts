import { UserActionType } from "./user.actionTypes";
import { User } from "firebase/auth";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import {
  UserData,
  AdditionalInformation,
} from "../../utils/firebase/firebase.utils";

export type CheckUserSession = Action<UserActionType.CHECK_USER_SESSION>;
export type SignUpSuccess = ActionWithPayload<
  UserActionType.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;
export type SignInSuccess = ActionWithPayload<
  UserActionType.SIGN_IN_SUCCESS,
  UserData
>;

export type SignUpFailed = ActionWithPayload<
  UserActionType.SIGN_UP_FAILED,
  Error
>;
export type SignInFailed = ActionWithPayload<
  UserActionType.SIGN_IN_FAILED,
  Error
>;

export type SetCurrentUser = ActionWithPayload<
  UserActionType.SET_CURRENT_USER,
  UserData
>;
export type SignInGoogleStart = Action<UserActionType.SIGN_IN_GOOGLE>;
export type SignOutUserStart = Action<UserActionType.SIGN_OUT_START>;
export type SignOutUserSuccess = Action<UserActionType.SIGN_OUT_SUCCESS>;
export type SignOutUserFailed = ActionWithPayload<
  UserActionType.SIGN_OUT_FAILED,
  Error
>;
export type SignInWithEmailAndPasswordStart = ActionWithPayload<
  UserActionType.SIGN_IN_EMAIL_PASSWORD,
  { email: string; password: string }
>;
export type SignUpWithEmailAndPasswordStart = ActionWithPayload<
  UserActionType.SIGN_UP_EMAIL_PASSWORD,
  { email: string; password: string; displayName: string }
>;

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(UserActionType.SET_CURRENT_USER, user)
);

export const signInGoogleStart = withMatcher(
  (): SignInGoogleStart => createAction(UserActionType.SIGN_IN_GOOGLE)
);

export const signOutUserStart = withMatcher(
  (): SignOutUserStart => createAction(UserActionType.SIGN_OUT_START)
);

export const signOutUserSuccess = withMatcher(
  (): SignOutUserSuccess => createAction(UserActionType.SIGN_OUT_SUCCESS)
);

export const signOutUserFailed = withMatcher(
  (error: Error): SignOutUserFailed =>
    createAction(UserActionType.SIGN_OUT_FAILED, error)
);

export const signInWithEmailAndPasswordStart = withMatcher(
  (email: string, password: string): SignInWithEmailAndPasswordStart =>
    createAction(UserActionType.SIGN_IN_EMAIL_PASSWORD, { email, password })
);

export const signUpWithEmailAndPasswordStart = withMatcher(
  (
    email: string,
    password: string,
    displayName: string
  ): SignUpWithEmailAndPasswordStart =>
    createAction(UserActionType.SIGN_UP_EMAIL_PASSWORD, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(UserActionType.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(UserActionType.SIGN_IN_SUCCESS, user)
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(UserActionType.SIGN_UP_FAILED, error)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(UserActionType.SIGN_IN_FAILED, error)
);

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(UserActionType.CHECK_USER_SESSION)
);
