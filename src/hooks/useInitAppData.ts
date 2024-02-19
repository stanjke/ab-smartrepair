import { useEffect } from "react";
import { FilterOptionsInstance, addOptionsAction } from "../store/filter/filterOptionsSlice";
import { ICar } from "../types/types";
import { useDispatch } from "react-redux";
import getPriceRange from "../helpers/getPriceRange";
import { getFullYear } from "../helpers/getFullYear";
import { useGetAllCarsQuery } from "../store/serverResponse/googleWebAppApi";
import { addCarsAction } from "../store/cars/carsSlice";
// import { setSortOptionsAction } from "../store/sort/sortOptionsSlice";

export const useInitAppData = () => {
  const { data: AllCars, isLoading } = useGetAllCarsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      const filterOptionsMap: FilterOptionsInstance = {
        engineType: [],
        gearType: [],
        manufacture: [],
        model: [],
        price: [],
        registration: [],
      };

      filterOptionsMap.manufacture = [...new Set(AllCars?.map((car: ICar): string => car["manufacturerName"]))] as string[];
      filterOptionsMap.model = [...new Set(AllCars?.map((car: ICar): string => car["modelName"]))] as string[];
      filterOptionsMap.engineType = [...new Set(AllCars?.map((car: ICar): string => car["engineType"]))] as string[];
      filterOptionsMap.gearType = [...new Set(AllCars?.map((car: ICar): string => car["gearboxType"]))] as string[];
      filterOptionsMap.price = getPriceRange(AllCars).map(({ id, min }) => ({ id, text: `bis ${min} - €`, value: min }));

      const uniqRegistrationArr = [...new Set(AllCars?.map((car: ICar): number => getFullYear(car["registration"])))];

      filterOptionsMap.registration = uniqRegistrationArr?.map((breakpoint, index) => ({ id: index + 1, text: `ab ${breakpoint}`, value: breakpoint as number }));

      dispatch(addOptionsAction(filterOptionsMap));
      dispatch(addCarsAction(AllCars));
    }
  }, [isLoading, AllCars]);
};
