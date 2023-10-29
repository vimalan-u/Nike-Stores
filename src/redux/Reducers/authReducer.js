import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem, setItem } from "../../utils/cookiestorage";
import Cookies from "js-cookie";
import { removeItemLocal } from "../../utils/localstorage";

const initialState = {
  isLogin: false,
  token: getItem("token") || "",
  user: getItem("user") || {},
  error: "",
  loading: false,
  resetemail: "",
  dark: false,
  isAdmin: false,
};

export const getLoginSuccess = createAsyncThunk(
  "authentication/getLoginSuccess",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/auth/login`, data);
      const resdata = await res.data;
      setItem("token", resdata.token);
      let userdata = JSON.stringify(resdata.user);
      setItem("user", userdata);
      return resdata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getGoolgeLoginSuccess = createAsyncThunk(
  "authentication/getGoolgeLoginSuccess",
  async ({ rejectWithValue }) => {
    try {
      const url = `${window.location.url}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      // console.log("data", data);
      setItem("token", data.token);
      let userdata = JSON.stringify(data.user);
      setItem("user", userdata);
      return resdata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetpassword = createAsyncThunk(
  "authentication/resetpassword",
  async (data, { rejectWithValue }) => {
    try {
      let res = await axios.post("/auth/sendotp", {
        data,
      });
      const resdata = await res.data;
      Cookies.set("otp", res.data.otp, {
        expires: new Date(new Date().getTime() + 5 * 60 * 1000),
      });
      return resdata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    removepassword: (state, action) => {
      state.resetemail = "";
    },
    logoutApi: (state, action) => {
      state.isLogin = false;
      state.error = "";
      state.token = "";
      state.user = {};
      state.loading = false;
      removeItemLocal("persist:root");
      window.localStorage.clear()
    },
    updateColorModel: (state, action) => {
      state.dark = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoginSuccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLoginSuccess.fulfilled, (state, action) => {
      state.token = getItem("token");
      state.isLogin = true;
      state.user = JSON.parse(getItem("user"));
      state.loading = false;
      state.isAdmin = !!action.payload.user.isAdmin === true ? true : false;
    });
    builder.addCase(getLoginSuccess.rejected, (state, action) => {
      state.isLogin = false;
      state.error = action.payload.message;
      state.token = "";
      state.user = {};
      state.loading = false;
    });

    builder.addCase(getGoolgeLoginSuccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGoolgeLoginSuccess.fulfilled, (state, action) => {
      state.token = getItem("token");
      state.isLogin = true;
      state.user = JSON.parse(getItem("user"));
      state.loading = false;
    });
    builder.addCase(getGoolgeLoginSuccess.rejected, (state, action) => {
      state.isLogin = false;
      state.error = action.payload.message;
      state.token = "";
      state.user = {};
      state.loading = false;
    });

    builder.addCase(resetpassword.pending, (state) => {
      state.loadingreset = true;
    });
    builder.addCase(resetpassword.fulfilled, (state, action) => {
      state.resetemail = action.payload.email;
      state.loadingreset = false;
    });
    builder.addCase(resetpassword.rejected, (state, action) => {
      state.errorrest = action.payload.message;
      state.loadingreset = false;
    });
  },
});

export const { removepassword, logoutApi, updateColorModel } =
  authSlice.actions;

export default authSlice.reducer;
