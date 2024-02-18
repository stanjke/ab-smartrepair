import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  searchQuery: string;
}
const initialState: InitialState = {
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "createSlice",
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
});

export const { setSearch: setSearchAction } = searchSlice.actions;

export default searchSlice.reducer;
