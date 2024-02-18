import { DeliveryStatus, DeliveryOptions } from "../../constants/constants";

export const translateDeliveryStatus = (deliveryStatus: DeliveryStatus): string => DeliveryOptions[deliveryStatus];
