import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { generateReducer } from "./reducer";
import { fetchDataThunk } from "./actions/fetchData";
import generate from "./generate";

export const fetchRetailerProductList = fetchDataThunk(
  "retailerProductList",
  "retailerProducts"
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "userInfo"],
};

const rootReducer = combineReducers({
  userInfo: generateReducer("userInfo").reducer,
  token: generateReducer("token").reducer,
  // ============= CURDS APIS =============== //
  retailerProductList: generate("retailerProductList", fetchRetailerProductList),
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
