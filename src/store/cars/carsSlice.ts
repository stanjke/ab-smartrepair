import { createSlice } from "@reduxjs/toolkit";
import { ICar } from "../../types/types";

interface InitialState {
  // cars: Record<string, unknown>[];
  cars: ICar[];
}

const initialState: InitialState = {
  cars: [],
};

const carsSlice = createSlice({
  name: "carsSlice",
  initialState,
  reducers: {
    addCars: (state, { payload }) => {
      state.cars = payload;
    },
  },
});

export const { addCars: addCarsAction } = carsSlice.actions;
export default carsSlice.reducer;
