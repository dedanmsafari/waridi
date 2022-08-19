import { CategoryTypes, Category } from "./categories.actionTypes";
import { CategoryActions } from "./categories.actions";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as CategoryActions
): CategoriesState => {
  switch (action.type) {
    case CategoryTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CategoryTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case CategoryTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
