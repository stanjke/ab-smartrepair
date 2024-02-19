import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterParam } from "../../constants/constants";
import { ICar } from "../../types/types";

export interface FilterParams {
  manufacture: string;
  model: string;
  engineType: string;
  gearType: string;
  price: string;
  registration: string;
}

interface InitialState {
  filterParams: FilterParams;
  filteredCars: ICar[];
}

const initialState: InitialState = {
  filterParams: {
    engineType: "",
    gearType: "",
    manufacture: "",
    price: "",
    registration: "",
    model: "",
  },
  filteredCars: [],
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setEngineType: ({ filterParams }, { payload }) => {
      if (payload === FilterParam.ENGINETYPE) {
        filterParams.engineType = "";
      } else {
        filterParams.engineType = payload;
      }
    },
    setGearType: ({ filterParams }, { payload }) => {
      if (payload === FilterParam.GEARTYPE) {
        filterParams.gearType = "";
      } else {
        filterParams.gearType = payload;
      }
    },
    setManufacture: ({ filterParams }, { payload }) => {
      if (payload === FilterParam.MANUFACTURE) {
        filterParams.manufacture = "";
      } else {
        filterParams.manufacture = payload;
      }
    },
    setPrice: ({ filterParams }, { payload }) => {
      if (payload === FilterParam.PRICE) {
        filterParams.price = "";
      } else {
        filterParams.price = payload;
      }
    },
    setRegistration: ({ filterParams }, { payload }) => {
      if (payload === FilterParam.REGISTRATION) {
        filterParams.registration = "";
      } else {
        filterParams.registration = payload;
      }
    },
    setModel: ({ filterParams }, { payload }) => {
      if (payload === FilterParam.MODEL) {
        filterParams.model = "";
      } else {
        filterParams.model = payload;
      }
    },
    clearFilterField: (state, { payload }: PayloadAction<keyof FilterParams>) => {
      state.filterParams[payload] = initialState.filterParams[payload];
    },
    setFilteredCars: (state, { payload }) => {
      console.log("PAYLOAD: ", payload);
      state.filterParams = payload;
    },
  },
});

export const {
  setFilteredCars: setFilteredCarsAction,
  clearFilterField: clearFilterFieldAction,
  setEngineType: setEngineTypeAction,
  setGearType: setGearTypeAction,
  setManufacture: setManufactureAction,
  setModel: setModelAction,
  setPrice: setPriceAction,
  setRegistration: setRegistrationAction,
} = filterSlice.actions;
export default filterSlice.reducer;
