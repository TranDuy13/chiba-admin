import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import purchaseService from "./purchaseService";

const initialState = {
  purchase:null,
  detail:null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const buyProduct = createAsyncThunk(
  "purchase/buy",
  async (data, thunkAPI) => {
    try {
        
      return await purchaseService.buyProduct(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getStatusId = createAsyncThunk(
  "purchase/get/product",
  async (id, thunkAPI) => {
    try {
        
      return await purchaseService.getStatusId(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getStatusByUser = createAsyncThunk(
    "purchase/get",
    async (data, thunkAPI) => {
      try {
          
        return await purchaseService.getStatusByUser(data);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  export const getStatusBySeller = createAsyncThunk(
    "purchase/seller",
    async (data, thunkAPI) => {
      try {
          
        return await purchaseService.getStatusBySeller(data);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
export const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyProduct.pending, (state) => {
        state.isLoading = true;
        state.purchase= null
      })
      .addCase(buyProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.purchase= action.payload
      })
      .addCase(buyProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getStatusByUser.pending, (state) => {
        state.isLoading = true;
        state.purchase= null
      })
      .addCase(getStatusByUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.purchase= action.payload
      })
      .addCase(getStatusByUser.rejected, (state, action) => {
        state.isLoading = false;
        state.purchase= null
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getStatusBySeller.pending, (state) => {
        state.isLoading = true;
        state.purchase= null
      })
      .addCase(getStatusBySeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.purchase= action.payload
      })
      .addCase(getStatusBySeller.rejected, (state, action) => {
        state.isLoading = false;
        state.purchase= null
        state.isError = true;
        state.message = action.payload;
      }).addCase(getStatusId.pending, (state) => {
        state.isLoading = true;
        state.detail= null
      })
      .addCase(getStatusId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.detail= action.payload
      })
      .addCase(getStatusId.rejected, (state, action) => {
        state.isLoading = false;
        state.detail= null
        state.isError = true;
        state.message = action.payload;
      })
      ;
  },
});
export const { reset } = purchaseSlice.actions;
export default purchaseSlice.reducer;