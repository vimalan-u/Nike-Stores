import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setToast } from "../../utils/extraFunctions";

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
    let toast = data[2];
    try {
      const response = await axios.post(`/favourite/add/favourite`, data1, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const resdata = await response.data;
      // setToast(
      //   toast,
      //   resdata.message ? resdata.message : "Item added to the favourites",
      //   "success"
      // );
      return resdata;
    } catch (error) {
      setToast(
        toast,
        error.response.data.message
          ? error.response.data.message
          : "Something Went Wrong!",
        "info"
      );
      return rejectWithValue(error.response.data);
    }
  }
);

export const getFavourite = createAsyncThunk(
  "favourite/getFavourite",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/favourite/get/favourite`, {
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
      let res = await axios.delete(`/favourite/delete/favourite/${id}`, {
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
