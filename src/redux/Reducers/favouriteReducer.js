import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  favourite: [],
  error: false,
};

export const addFavourite = createAsyncThunk(
  "favourite/addFavourite",
  async (data, { rejectWithValue }) => {
    let data1 = data[0];
    let token = data[1];
    console.log("token in redux " , token);
    try {
      const res = await axios.post(`/product/add/favourite`, data1, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const resdata = await res.data;
      return resdata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getFavourite = createAsyncThunk(
  "favourite/getFavourite",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/product/get/favourite`, {
        headers: { Authorization: `Bearer ${data}` },
      });
      const resdata = await res.data;
      return resdata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "favourite/deleteFavourite",
  async (data, { rejectWithValue }) => {
    let id = data[0];
    let token = data[1];
    try {
      let res = await axios.delete(`/product/delete/favourite/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const resdata = await res.data;
      return resdata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavourite.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFavourite.fulfilled, (state, action) => {
      state.favourite = action.payload;
      state.loading = false;
    });
    builder.addCase(getFavourite.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

// export const { removepassword, logoutApi, updateColorModel } =
//   favouriteSlice.actions;

export default favouriteSlice.reducer;
