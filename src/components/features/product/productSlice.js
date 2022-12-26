import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

// const user = JSON.parse(localStorage.getItem("user"));
// const users = JSON.parse(localStorage.getItem("users"));

const initialState = {
  product: null,
  products:null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const createProduct = createAsyncThunk(
  "product/add",
  async(data,thunkAPI)=>{
    try {
      return await productService.createProduct(data)
    } catch (error) {
      const message =
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
  
      return thunkAPI.rejectWithValue(message);
    }
  }
)
export const getProductbyseller = createAsyncThunk(
  "product/get",
  async(data,thunkAPI)=>{
    try {
      return await productService.getProductbyseller(data)
    } catch (error) {
      const message =
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
  
      return thunkAPI.rejectWithValue(message);
    }
  }
)
export const getProduct = createAsyncThunk(
  "product/getProduct",
  async(data,thunkAPI)=>{
    try {
    
      return await productService.getProduct(data)
    } catch (error) {
      const message =
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
  
      return thunkAPI.rejectWithValue(message);
    }
  }
)
export const updateProduct = createAsyncThunk(
  "product/update",
  async(data,thunkAPI)=>{
    try {
    
      return await productService.updateProduct(data)
    } catch (error) {
      const message =
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
  
      return thunkAPI.rejectWithValue(message);
    }
  }
)
export const gettypeProduct = createAsyncThunk(
  "product/get/typeproduct",
  async(data,thunkAPI)=>{
    try {
      return await productService.gettypeProduct(data)
    } catch (error) {
      const message =
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
  
      return thunkAPI.rejectWithValue(message);
    }
  }
)
export const getAllProduct = createAsyncThunk(
  "product/getall",
  async(_,thunkAPI)=>{
    try {
    
      return await productService.getAllProduct()
    } catch (error) {
      const message =
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
  
      return thunkAPI.rejectWithValue(message);
    }
  }
)


export const productSlice = createSlice({
  name: "product",
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
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProductbyseller.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message=''
      })
      .addCase(getProductbyseller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload
        // state.message = action.payload.message
      })
      .addCase(getProductbyseller.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message=''
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload
        // state.message = action.payload.message
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.product = null
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload
        state.message = action.payload.message
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(gettypeProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message=''
      })
      .addCase(gettypeProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload
        state.message = action.payload.message
      })
      .addCase(gettypeProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
