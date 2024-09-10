import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/signup", userInfo);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/login", userInfo);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("/users/logout");
    clearAuthHeader();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
      setAuthHeader(persistedToken);
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue();
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
      if (persistedToken) return true;
      return false;
    },
  }
);
