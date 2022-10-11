import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../services/api";

export const addFeedback = createAsyncThunk(
  "feedback/addFeedback",
  async (feedback, { rejectWithValue }) => {
    try {
      const newFeedback = await UserAPI.addNewFeedback(feedback);
      return newFeedback;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
