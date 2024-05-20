import { configureStore } from "@reduxjs/toolkit";
import seriesItem from "../store/seriesSlice";

export default configureStore({
  reducer: {
    seriesItem: seriesItem.reducer
  }
})