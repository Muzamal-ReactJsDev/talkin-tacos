import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../Service/Service";
import UserSlice from "../Service/UserSlice";
export const Store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    app: UserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
setupListeners(Store.dispatch);
