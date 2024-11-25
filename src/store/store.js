import { createStore } from "redux";
import { ProductReducer } from "./reducers/ProductReducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, ProductReducer)

  export let store = createStore(persistedReducer)
export let persistor = persistStore(store)
