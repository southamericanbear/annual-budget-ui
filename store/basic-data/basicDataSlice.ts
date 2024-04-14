import { createSlice } from "@reduxjs/toolkit";

interface BasicDataSlice {
  dollarBlue: number;
}

const initialState: BasicDataSlice = {
  dollarBlue: 0,
};

const basicDataSlice = createSlice({
  name: "basicData",
  initialState,
  reducers: {
    updateDollarBlue: (state, action) => {
      state.dollarBlue = action.payload;
    },
  },
});

export const { updateDollarBlue } = basicDataSlice.actions;
export default basicDataSlice.reducer;
