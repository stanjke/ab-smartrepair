import { IS_TAX, TAX_RATE } from "../constants/constants";
import { decorator } from "./decorator/decorator";

export const calculateNetPrice = (totalPrice: number, taxRate: number = TAX_RATE): string => decorator.price(totalPrice - (totalPrice * taxRate) / 100, IS_TAX);
