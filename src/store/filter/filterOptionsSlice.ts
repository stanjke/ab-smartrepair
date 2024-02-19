import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
    addOptions: (state, { payload }: PayloadAction<FilterOptionsInstance>) => {
      state.manufacture = payload.manufacture || state.manufacture;
      state.model = payload.model || state.model;
      state.engineType = payload.engineType || state.engineType;
      state.gearType = payload.gearType || state.gearType;
      state.registration = payload.registration || state.registration;
      state.price = payload.price || state.price;
    },
  },
});
export const { addOptions: addOptionsAction } = filterOptionsSlice.actions;
export default filterOptionsSlice.reducer;
