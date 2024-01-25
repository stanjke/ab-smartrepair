import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { googleWebAppApi } from "./serverResponse/googleWebAppApi";

const rootReducer = combineReducers({
    [googleWebAppApi.reducerPath]: googleWebAppApi.reducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(googleWebAppApi.middleware),
});

export default store

export type RootState = ReturnType<typeof store.getState>;