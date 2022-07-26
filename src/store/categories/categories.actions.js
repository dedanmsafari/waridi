import { createAction } from "../../utils/reducer/reducer.utils";
import { CategoryTypes } from "./categories.actionTypes";

export const setCategories = (categoriesArray) =>
  createAction(CategoryTypes.SET_CATEGORIES, categoriesArray);
