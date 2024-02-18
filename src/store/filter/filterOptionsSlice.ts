import { createSlice } from "@reduxjs/toolkit";
import { IPriceRange, IYearRange } from "../../types/types";

export interface FilterOptionsInstance {
  manufacture: string[];
  model: string[];
  engineType: string[];
  gearType: string[];
  registration: IYearRange[];
  price: IPriceRange[];
}

const initialState: FilterOptionsInstance = {
  manufacture: [],
  model: [],
  engineType: [],
  gearType: [],
  registration: [],
  price: [],
};

const filterOptionsSlice = createSlice({
  name: "filterOptionsSlice",
  initialState,
  reducers: {
    addOptions: (state, { payload }) => {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
});
export const { addOptions: addOptionsAction } = filterOptionsSlice.actions;
export default filterOptionsSlice.reducer;
