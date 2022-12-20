import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import chatbotService from "./chatbotService";

const initialState = {
  messagesChat:[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const messageAI = createAsyncThunk(
  "ai/question",
  async (data, thunkAPI) => {
    try {
        
      return await chatbotService.messageAI(data);
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
export const chatbotSlice = createSlice({
  name: "ai",
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
      .addCase(messageAI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(messageAI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messagesChat= action.payload
      })
      .addCase(messageAI.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { reset } = chatbotSlice.actions;
export default chatbotSlice.reducer;