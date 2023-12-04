import {toast} from "react-toastify";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Swal from "sweetalert2";

import {fetchData} from "../../facade/api/utils/axios.hook";

// import store from "../store";
// import { instance } from "../api/apiSetup";

const token = localStorage.getItem("access_token");

export const getError = error => {
  toast.error(error);
};
export const getInfo = text => {
  toast.info(text);
};

const initialState = {
  user: null,
  isAuth: false,
  authLoadingStatus: "idle",
  token: token ? token : null,
  facsimile: null,
  systemLanguage: "en",
  // chosenUser: null,
};

export const login = createAsyncThunk("user/login", async body => {
  const responce = fetchData("/auth/login", "post", body);
  return responce;
});

export const logout = createAsyncThunk("user/logout", async () => {
  const responce = fetchData("/auth/logout", "post");
  return responce;
});

export const changePassword = createAsyncThunk("user/changePassword", async newPasw => {
  const responce = fetchData(`/users/changePass/${newPasw.userId}`, "patch", {password: newPasw.password});
  return responce;
});

export const getUser = createAsyncThunk("user/getUser", async () => {
  const responce = fetchData("/users/getCurrentUser", "get");

  return responce;
});

export const createFacsimile = createAsyncThunk("user/createFacsimile", async formData => {
  const responce = fetchData("/facsimile/create", "post", formData);
  return responce;
});

export const getFacsimileForCurrentUser = createAsyncThunk("user/getFacsimileForCurrentUser", async () => {
  const responce = fetchData("/facsimile/getForCurrent", "get");
  return responce;
});

export const registrUser = async user => {
  fetchData("/users/add", "post", user).then(res => {
    if (Object.prototype.hasOwnProperty.call(res, "userId")) {
      // getInfo(`Користувача ${res.persona.CA_FULL_NAME} успішно зареєстровано`);
      Swal.fire({
        title: `Користувача ${res.persona.DA_EMPLOYEE_NAME} успішно зареєстровано`,
        text: `Логін: ${res.persona.DA_LOGIN}`,
        icon: "info",
        confirmButtonText: "Ок",
      });
    }
  });
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNotAuth: state => {
      "tyta";
      localStorage.removeItem("access_token");
      state.token = null;
      state.user = null;
    },
    addChosenUser: (state, payload) => {
      state.chosenUser = payload;
    },
    addFacsimile: (state, {payload}) => {
      state.facsimile = payload;
    },
    setSystemLanguage: (state, {payload}) => {
      state.systemLanguage = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, {payload}) => {
        if (Object.prototype.hasOwnProperty.call(payload, "message")) {
          getInfo(payload.message);
          state.user = payload.userId;
          state.token = null;
          localStorage.removeItem("access_token");
        }
        if (Object.prototype.hasOwnProperty.call(payload, "token")) {
          state.token = payload.token;
          state.user = payload.user;
          localStorage.setItem("access_token", payload.token);
          getInfo("Авторизовано");
        }
      })
      .addCase(changePassword.fulfilled, (state, {payload}) => {
        state.token = payload.token;
        state.user = payload.user;
        localStorage.setItem("access_token", payload.token);
        getInfo("Пароль успішно змінено!");
      })
      .addCase(logout.fulfilled, state => {
        localStorage.removeItem("access_token");
        state.token = null;
        state.user = null;
      })
      .addCase(getUser.fulfilled, (state, {payload}) => {
        state.user = payload;
      })
      .addCase(createFacsimile.fulfilled, (state, {payload}) => {
        state.facsimile = payload;
      })
      .addCase(getFacsimileForCurrentUser.fulfilled, (state, {payload}) => {
        state.facsimile = payload;
      })
      .addCase(getUser.rejected, state => {
        state.token = null;
        state.user = null;
        // instance.interceptors.request.use(
        //     config => {
        //       config.headers['Authorization'] = null;
        //           return config;
        //       },
        //       error => {return Promise.reject(error); }
        //   );
      })
      .addDefaultCase(() => {});
  },
});

const {actions, reducer} = userSlice;

export const {setNotAuth, addFacsimile, setSystemLanguage} = actions;

export default reducer;

export const getCurrentUser = state => state.user.user;

export const selectFacsimile = state => state.user.facsimile;
