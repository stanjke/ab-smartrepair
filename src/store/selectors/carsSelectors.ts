import { createSelector } from "reselect";
import { RootState } from "..";
import { SortingOptionKeys, VehicleStatusSort } from "../../constants/constants";

const carsSelector = (state: RootState) => state.cars;
const filtersSelector = (state: RootState) => state.filter;
const sortSelector = (state: RootState) => state.sort;
const searchSelector = (state: RootState) => state.search;

export const filteredCarsSelector = createSelector([carsSelector, filtersSelector, sortSelector, searchSelector], ({ cars }, { filterParams }, { sort }, { searchQuery }) => {
  let filteredCars = cars.filter((car) => {
    const registrationYear = new Date(car.registration).getFullYear().toString();
    const activePriceRange = Number(filterParams.price);

    const matchesFilters =
      (!filterParams.manufacture || car.manufacturerName === filterParams.manufacture) &&
      (!filterParams.model || car.modelName === filterParams.model) &&
      (!filterParams.engineType || car.engineType === filterParams.engineType) &&
      (!filterParams.gearType || car.gearboxType === filterParams.gearType) &&
      (!filterParams.registration || registrationYear === filterParams.registration) &&
      (!filterParams.price || (car.currentPrice >= 0 && car.currentPrice <= Number(filterParams.price)));

    const matchesSearchQuery = searchQuery.trim() === "" || car.modelName.toLowerCase().includes(searchQuery.toLowerCase()) || car.manufacturerName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilters && matchesSearchQuery;
  });

  return filteredCars.sort((a, b) => {
    switch (sort) {
      case SortingOptionKeys.HIGHEST_MILEAGE_FIRST:
        return b.currentPrice - a.currentPrice;
      case SortingOptionKeys.LOWEST_MILEAGE_FIRST:
        return a.currentPrice - b.currentPrice;
      case SortingOptionKeys.NEWEST_FIRST:
        return VehicleStatusSort[a.state] - VehicleStatusSort[b.state];
      case SortingOptionKeys.STOCK_FIRST:
        return VehicleStatusSort[b.state] - VehicleStatusSort[a.state];
      case SortingOptionKeys.HIGHEST_PRICE_FIRST:
        return b.currentPrice - a.currentPrice;
      case SortingOptionKeys.LOWEST_PRICE_FIRST:
        return a.currentPrice - b.currentPrice;
      default:
        return 0;
    }
  });
});
