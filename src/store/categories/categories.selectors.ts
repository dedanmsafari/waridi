import { createSelector } from "reselect";

const categoriesSelector = (state) => state.categories;

export const selectCategories = createSelector(
  [categoriesSelector],
  (categoriesSlice) => categoriesSlice.categories
);

const toObject = (acc, categoryItem) => {
  const { title, items } = categoryItem;
  acc[title.toLowerCase()] = items;
  return acc;
};

export const selectCategoriesMap = createSelector(
  [selectCategories],

  (categories) => categories.reduce(toObject, {})
);

export const selectCategoriesIsLoading = createSelector(
  [categoriesSelector],
  (categoriesSlice) => categoriesSlice.isLoading
);
