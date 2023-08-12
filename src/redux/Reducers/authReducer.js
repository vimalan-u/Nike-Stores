import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem, setItem } from "../../utils/cookiestorage";
import { setToast } from "../../utils/extraFunctions";

const initialState = {
  isLogin: false,
  token: getItem("token") || false,
  user: getItem("user") || {},
  error: "",
  loading: true,
};

export const getLoginSuccess = createAsyncThunk(
  "authentication/getLoginSuccess",
  async (data, toast, navigate) => {
    try {
      const res = await axios.post(`/users/login`, data);
      const resdata = await res.data;
      // setItem("token", resdata.token);
      // setItem("user", resdata.user);
      // setToast(toast, "Signup successfully", "success");
      // navigate(-1);
      return resdata;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoginSuccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLoginSuccess.fulfilled, (state, action) => {
      console.log("in redux action", action);
      state.token = action.payload.token;
      state.isLogin = true;
      state.user = action.payload.user;
      state.loading = false;
    });
    builder.addCase(getLoginSuccess.rejected, (state, action) => {
      state.isLogin = false;
      state.error = action.payload.message;
      state.token = "";
      state.user = {};
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
