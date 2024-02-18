import { decorateDate } from "./decorateDate";
import { decorateMileage } from "./decorateMileage";
import { decoratePrice } from "./decoratePrice";

export const decorator = {
  price: decoratePrice,
  mileage: decorateMileage,
  date: decorateDate,
};
