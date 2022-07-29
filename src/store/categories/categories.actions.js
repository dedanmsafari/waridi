import { createAction } from "../../utils/reducer/reducer.utils";
import { CategoryTypes } from "./categories.actionTypes";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

//fetch categories start

export const fetchCategoriesStart = () =>
  createAction(CategoryTypes.FETCH_CATEGORIES_START);
//fetch categories success

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CategoryTypes.FETCH_CATEGORIES_SUCCESS, categoriesArray);
//fetch categories failure

export const fetchCategoriesFailure = (error) =>
  createAction(CategoryTypes.FETCH_CATEGORIES_FAILURE, error);

//Async thunk function

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};
