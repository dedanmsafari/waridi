import { UserActionType } from "./user.actionTypes";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(UserActionType.SET_CURRENT_USER, user);
