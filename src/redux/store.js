import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import authReducer from "./Reducers/authReducer";
import homeReducer from "./Reducers/homeReducer";
import productsReducer from "./Reducers/productsReducer";
import cartReducer from "./Reducers/cartReducer";
import favouriteReducer from "./Reducers/favouriteReducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  product: productsReducer,
  cart: cartReducer,
  favourite: favouriteReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
