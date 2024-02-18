import { VehicleStatus, vehicleStatusTranslation } from "../../constants/constants";

export const translateVehicleStatus = (vehicleStatus: VehicleStatus): string => vehicleStatusTranslation[vehicleStatus];
