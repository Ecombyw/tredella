import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { generateReducer } from "./reducer";
import { fetchDataThunk } from "./actions/fetchData";
import generate from "./generate";

export const fetchRetailerProductList = fetchDataThunk("homeData", "index");
export const fetchWholeSaleProductList = fetchDataThunk(
  "homeData",
  "wholesale_index"
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "userInfo", "checkLanguage"],
};

const rootReducer = combineReducers({
  userInfo: generateReducer("userInfo").reducer,
  token: generateReducer("token").reducer,
  checkLanguage: generateReducer("checkLanguage").reducer,
  // ============= CURDS APIS =============== //
  homeData: generate("homeData", fetchRetailerProductList),
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
