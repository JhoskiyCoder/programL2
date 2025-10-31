import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import favoritesReducer from "./slices/favoriteSlice";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice"; // 👈 Добавили authSlice
import registrationMiddleware from "./middleware/registration/registrationMiddleware";
import authMiddleware from "./middleware/authMiddleware";

const rootReducer = combineReducers({
  post: postsReducer,
  favorite: favoritesReducer,
  user: userReducer,
  auth: authReducer, // 👈 Добавили сюда
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registrationMiddleware,
      authMiddleware,
    ]),
});
