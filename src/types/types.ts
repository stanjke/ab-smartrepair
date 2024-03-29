import { DeliveryStatus, EngineType, VehicleStatus } from "../constants/constants";

export interface ICar {
  id: number;
  vin: string;
  bodyShape: string;
  seatCount: number;
  innerNumber: string;
  hsn: number;
  tsn: string;
  modelKey: string;
  hu: string;
  carLocation: string;
  manufacturerName: string;
  manufacturerDate: string;
  state: VehicleStatus;
  delivery: DeliveryStatus;
  registration: string;
  title: string;
  enginePower: number;
  numberOfCylinders: number;
  engineSize: number;
  engineType: EngineType;
  emissionStandard: string;
  mileage: number;
  gearboxType: string;
  interior: string;
  exteriorColorName: string;
  previousPrice: number;
  currentPrice: number;
  modelName: string;
  images: string;
  consumptionAverage: string;
  consumptionElectricity: string;
  eaerRangeCombined: string;
  eaerRangeInTown: string;
  multimedia: string;
  safety: string;
  comfort: string;
  extra: string;
}

export interface IPriceRange {
  id: number;
  text: string;
  value: number;
}

export interface IYearRange {
  id: number;
  text: string;
  value: number;
}

export interface IconProps {
  viewBox?: string;
  width?: string;
  height?: string;
  className?: string;
}
