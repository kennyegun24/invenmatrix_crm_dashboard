import { configureStore } from "@reduxjs/toolkit";
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

const persistConfig = {
  key: "iujkdisfhejfbdifubsjken",
  storage: sessionStorage,
};
let store;
const persistedReducer = persistReducer(persistConfig, folderStructure);

store = configureStore({
  reducer: { folderStructure: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export { store };
