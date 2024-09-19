import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import folderStructure from "./folderStructure";
import sessionStorage from "redux-persist/es/storage/session";
import Breadcrumbs from "./Breadcrumbs";

const persistConfig = {
  key: "iujkdisfhejfbdifubsjken",
  storage: sessionStorage,
};
let store;
const combinedReducers = combineReducers({
  folderStructure: folderStructure,
  breadCrumbs: Breadcrumbs,
});
const persistedReducer = persistReducer(persistConfig, combinedReducers);

store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export { store };
