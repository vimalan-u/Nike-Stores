import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  products: [],
  backupData: [],
};

export const getProductsData = createAsyncThunk(
  "product/getProductsData",
  async (pagename) => {
    let res = await axios.get(`/product/getallproducts?pagename=${pagename}`);
    const data = await res.data;
    return data;
  }
);

export const setAllFilters = createAsyncThunk(
  "product/getFilterdProductsData",
  async (filterData, { getState, rejectWithValue }) => {
    try {
      // console.log("filterData", filterData);
      const res = await axios.post("/product/getfilterdproducts", {
        data: filterData,
      });
      const data = await res.data.products;
      const backupdata = getState().backupData;

      if (data.length <= 0) {
        return backupdata;
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    nameAtoZ: (state, action) => {
      state.products = state.products
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));
    },
    nameZtoA: (state, action) => {
      state.products = state.products
        .slice()
        .sort((a, b) => b.title.localeCompare(a.title));
    },
    ratingHighToLow: (state, action) => {
      state.products = state.products
        .slice()
        .sort((a, b) => b.rating - a.rating);
    },
    ratingLowToHigh: (state, action) => {
      state.products = state.products
        .slice()
        .sort((a, b) => a.rating - b.rating);
    },
    priceHighToLow: (state, action) => {
      state.products = state.products.slice().sort((a, b) => b.price - a.price);
    },
    priceLowToHigh: (state, action) => {
      state.products = state.products.slice().sort((a, b) => a.price - b.price);
    },
    resetProductData: (state, action) => {
      state.products = state.backupData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductsData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.backupData = action.payload;
      state.error = false;
    });
    builder.addCase(getProductsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(setAllFilters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setAllFilters.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = false;
    });
    builder.addCase(setAllFilters.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  nameAtoZ,
  nameZtoA,
  ratingHighToLow,
  ratingLowToHigh,
  priceHighToLow,
  priceLowToHigh,
  resetProductData,
} = productSlice.actions;

export default productSlice.reducer;
