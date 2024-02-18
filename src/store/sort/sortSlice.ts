import { createSlice } from "@reduxjs/toolkit";
import { SortTitle } from "../../constants/constants";

interface InitialState {
  sort: string;
}

const initialState: InitialState = {
  sort: "",
};

const sortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    setSort: (state, { payload }) => {
      if (payload === SortTitle.TITLE) {
        state.sort = "";
      } else {
        state.sort = payload;
      }
    },
  },
});

export const { setSort: setSortAction } = sortSlice.actions;

export default sortSlice.reducer;
