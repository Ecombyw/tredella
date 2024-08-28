import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { generateReducer } from "./reducer";
import { fetchAsyncThunkData } from "./actions/fetchAsyncThunkData";
import generateSlice from "./actions/generateSlice";

// Thunks
export const fetchRetailerProductList = fetchAsyncThunkData(
  "homeData",
  "index"
);

export const fetchWholeSaleProductList = fetchAsyncThunkData(
  "homeData",
  "wholesale_index"
);
export const fetchMainCategoryList = fetchAsyncThunkData(
  "mainCategoriesList",
  "get_main_categories"
);
export const fetchSubCategoryList = fetchAsyncThunkData(
  "subCategoriesList",
  "get_sub_categories"
);

export const fetchChildCategoryList = fetchAsyncThunkData(
  "childCategoriesList",
  "get_child_categories"
);
export const fetchWishList = fetchAsyncThunkData(
  "userWishList",
  "buyer/wishlist"
);
// Create a Noop Storage for SSR
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

// Use the appropriate storage based on environment
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local") // Use localStorage if in client-side
    : createNoopStorage(); // Fallback to Noop Storage if in server-side

// Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userInfo", "checkLanguage", "currentTab"],
};

// Root Reducer
const rootReducer = combineReducers({
  userInfo: generateReducer("userInfo", "user").reducer,
  currentTab: generateReducer("currentTab").reducer,
  checkLanguage: generateReducer("checkLanguage").reducer,
  // // ============= CURDS APIS =============== //
  homeData: generateSlice({
    name: "homeData",
    fetchData: fetchRetailerProductList,
  }),
  // mainCategoriesList: generateSlice("mainCategoriesList", fetchMainCategoryList),
  // subCategoriesList: generateSlice("subCategoriesList", fetchSubCategoryList),
  // childCategoriesList: generateSlice("childCategoriesList", fetchChildCategoryList),
  // ================== Order APis =========== //
  // wishList: generateSlice("wishList", fetchWishList),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Persistor
export const Persistor = persistStore(store);
