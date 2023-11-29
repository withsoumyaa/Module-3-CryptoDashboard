// Currency Type

import { createSlice } from "@reduxjs/toolkit";

let initialState = ["inr"];

const currencySlice = createSlice({
  name: "defaultCurrency",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
