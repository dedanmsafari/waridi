import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CategoryTypes, Category } from "./categories.actionTypes";

export type FetchCategoriesStart = Action<CategoryTypes.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CategoryTypes.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailure = ActionWithPayload<
  CategoryTypes.FETCH_CATEGORIES_FAILURE,
  Error
>;

//fetch categories start

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart => createAction(CategoryTypes.FETCH_CATEGORIES_START)
);
//fetch categories success

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(CategoryTypes.FETCH_CATEGORIES_SUCCESS, categoriesArray)
);
//fetch categories failure

export const fetchCategoriesFailure = withMatcher(
  (error: Error): FetchCategoriesFailure =>
    createAction(CategoryTypes.FETCH_CATEGORIES_FAILURE, error)
);

//Async thunk function

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocuments();
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailure(error));
//   }
// };
