import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: "All",
};
const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {
    filleterProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { filleterProduct } = contentsSlice.actions;
export default contentsSlice.reducer;
