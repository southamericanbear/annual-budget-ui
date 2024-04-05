import { createSlice } from "@reduxjs/toolkit";

interface AccountSlice {
  accounts: any[];
}

const initialState: AccountSlice = {
  accounts: [],
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addAccounts: (state, action) => {
      state.accounts.push(action.payload);
    },
  },
});

export const { addAccounts } = accountsSlice.actions;
export default accountsSlice.reducer;
