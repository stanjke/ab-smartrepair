import { CURRENCY_SYMBOL, NUMBER_FORMAT_LOCALE } from "../../constants/constants";

export const decoratePrice = (price: number, isTax?: boolean): string => {
  let formattedPrice = price.toLocaleString(NUMBER_FORMAT_LOCALE);
  if (isTax) {
    return formattedPrice + ` ${CURRENCY_SYMBOL} Netto`;
  }

  return formattedPrice + ", -";
};
