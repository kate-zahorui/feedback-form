import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

import { addFeedback } from "./feedbackOperations";

const initialState = {
  isLoading: false,
  error: "",
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  extraReducers: {
    [addFeedback.pending]: (state, _) => {
      state.isLoading = true;
      state.error = "";
    },
    [addFeedback.fulfilled]: (state, action) => {
      state.isLoading = false;
      Notify.success(`Thanks! Your feedback has been sent.`);
    },
    [addFeedback.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export default feedbackSlice.reducer;
