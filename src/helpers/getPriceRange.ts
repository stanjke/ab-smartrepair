import { ICar } from "../types/types";
import interpolatePriceRange from "./interpolatePriceRange";

const getPriceRange = (arr: ICar[]) => {
  const arrCopy = [...arr];
  const sortedArr = arrCopy?.sort((a, b) => a.currentPrice - b.currentPrice);
  const minMaxPriceRange = [sortedArr[0].currentPrice, sortedArr[sortedArr.length - 1].currentPrice];
  const priceRange = interpolatePriceRange(minMaxPriceRange[0], minMaxPriceRange[1]);
  return priceRange.map((price, index) => ({
    id: index + 1,
    min: price,
    max: price + 1000,
  }));
};

export default getPriceRange;
