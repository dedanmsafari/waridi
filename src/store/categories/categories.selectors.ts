import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoryMap } from "./categories.actionTypes";
import { CategoriesState } from "./categories.reducer";

const categoriesSelector = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [categoriesSelector],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],

  (categories): CategoryMap =>
    categories.reduce((acc, categoryItem) => {
      const { title, items } = categoryItem;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [categoriesSelector],
  (categoriesSlice) => categoriesSlice.isLoading
);
