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
export const fetchMainCategoryList = fetchDataThunk(
  "mainCategoriesList",
  "get_main_categories"
);
export const fetchSubCategoryList = fetchDataThunk(
  "subCategoriesList",
  "get_sub_categories"
);
export const fetchChildCategoryList = fetchDataThunk(
  "childCategoriesList",
  "get_child_categories"
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "userInfo", "checkLanguage", "currentTab"],
};

const rootReducer = combineReducers({
  userInfo: generateReducer("userInfo").reducer,
  token: generateReducer("token").reducer,
  currentTab: generateReducer("currentTab").reducer,
  checkLanguage: generateReducer("checkLanguage").reducer,
  // ============= CURDS APIS =============== //
  homeData: generate("homeData", fetchRetailerProductList),
  mainCategoriesList: generate("mainCategoriesList", fetchMainCategoryList),
  subCategoriesList: generate("subCategoriesList", fetchSubCategoryList),
  childCategoriesList: generate("childCategoriesList", fetchChildCategoryList),
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
