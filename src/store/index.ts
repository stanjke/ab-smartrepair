import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { googleWebAppApi } from "./serverResponse/googleWebAppApi";
import filterOptionsReducer from "./filter/filterOptionsSlice";
import carsReducer from "./cars/carsSlice";
import sortReducer from "./sort/sortSlice";
import filterReducer from "./filter/filterSlice";
import searchReducer from "./search/searchSlice";

const rootReducer = combineReducers({
  cars: carsReducer,
  sort: sortReducer,
  filter: filterReducer,
  search: searchReducer,
  filterOptions: filterOptionsReducer,
  [googleWebAppApi.reducerPath]: googleWebAppApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(googleWebAppApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
