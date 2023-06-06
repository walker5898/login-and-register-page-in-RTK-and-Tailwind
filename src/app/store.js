import { configureStore } from "@reduxjs/toolkit";
import { loginuserApi } from "../services/loginUserApi";
import { userApi } from "../services/usersApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [loginuserApi.reducerPath]: loginuserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, loginuserApi.middleware),
});
