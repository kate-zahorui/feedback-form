import { configureStore } from "@reduxjs/toolkit";

import feedbackReducer from "./feedback/feedbackSlice";

const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});

export { store };
