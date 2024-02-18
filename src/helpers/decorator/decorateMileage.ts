import { NUMBER_FORMAT_LOCALE } from "../../constants/constants";

export const decorateMileage = (miles: number) => miles.toLocaleString(NUMBER_FORMAT_LOCALE);
