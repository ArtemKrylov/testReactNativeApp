import {configureStore} from "@reduxjs/toolkit";

import {instance} from "../../facade/api/apiSetup.js";
import sample from "../slices/SampleSlice.js";
import user, {setNotAuth} from "../slices/UserSlice";

const stringMiddleware = () => next => action => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: {
    user,
    sample,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

// const notAuth = ()=> ;

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      store.dispatch(setNotAuth());
      // sessionStorage.removeItem('access_token')
      return Promise.reject(error);
    } else {
      throw error;
    }
  },
);
