import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice";

// Configure Store
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    // dropdown: DropdownReducer,
    // job: JobReducer,
    // modals: modalReducer,
    // companyProfile: companyProfileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
