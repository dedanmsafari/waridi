import { CategoryTypes } from "./categories.actionTypes";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CategoryTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CategoryTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case CategoryTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
