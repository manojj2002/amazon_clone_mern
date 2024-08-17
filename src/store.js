import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootreducers from "./components/redux/reducers/main";
const middleware = [thunk];
const store = configureStore({
    reducer: rootreducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware), // Updated middleware configuration
    devTools: composeWithDevTools(),
  });

export default store;