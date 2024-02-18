export const TAX_RATE = 19;

export const CURRENCY_SYMBOL = "€";

export const TAXATION_NAME = "MwSt";

export const NUMBER_FORMAT_LOCALE = "de-DE";

export const IS_TAX = true;

export enum CompanyDetails {
  COMPANY_NAME = "AB-SmartRepair",
  MOBILE_PHONE = "+4915772976068",
  WHATS_APP = "+49 1577 2976068",
  EMAIL = "absmartrepair@gmail.com",
  STREET = "Parkring 14",
  ZIP = "04158",
  CITY = "Leipzig ",
  CONUTRY = "Germany",
  WEBSITE = "http://ab-smartrepair.de",
}

export enum DeliveryStatus {
  IMMEDIATELY_AVAILABLE = "immediatelyAvailable",
  IN_STOCK_SOON = "inStockSoon",
  PREORDER = "preorder",
}

export const DeliveryOptions = Object.freeze({
  [DeliveryStatus.IMMEDIATELY_AVAILABLE]: "sofort lieferbar",
  [DeliveryStatus.IN_STOCK_SOON]: "auf Lager inkl. 10 Tage Vorlauf",
  [DeliveryStatus.PREORDER]: "ab 10 Tage Vorlauf ",
});

export enum DeliveryOptionsDefault {
  TITLE = "Verfügbarkeit",
  ALL = "Alle",
}

export enum EngineType {
  PETROL = "Benzin",
  ELECTRO = "Electro",
  HYBRID_DIESEL = "Hybrid Diesel",
}

//FILTER

export enum FilterParam {
  MANUFACTURE = "Alle Hersteller",
  MODEL = "Alle Modelle",
  ENGINETYPE = "Kraftstoff",
  GEARTYPE = "Getriebe",
  PRICE = "Preis bis",
  REGISTRATION = "Erstzulassung ab",
}

export enum FilterOptionId {
  MANUFACTURE = "manufacture",
  MODEL = "model",
  ENGINETYPE = "engineType",
  GEARTYPE = "gearType",
  PRICE = "price",
  REGISTRATION = "registration",
}

// SORT

export enum SortingOptionKeys {
  LOWEST_PRICE_FIRST = "lowestPriceFirst",
  HIGHEST_PRICE_FIRST = "highestPriceFirst",
  STOCK_FIRST = "stockFirst",
  NEWEST_FIRST = "newestFirst",
  LOWEST_MILEAGE_FIRST = "lowestMileageFirst",
  HIGHEST_MILEAGE_FIRST = "highestMileageFirst",
}

export const sortingOptionTranslations: { [key in SortingOptionKeys]: string } = {
  [SortingOptionKeys.LOWEST_PRICE_FIRST]: "Niedrigster Preis zuerst",
  [SortingOptionKeys.HIGHEST_PRICE_FIRST]: "Höchster Preis zuerst",
  [SortingOptionKeys.STOCK_FIRST]: "Bestand zuerst",
  [SortingOptionKeys.NEWEST_FIRST]: "Neueste zuerst",
  [SortingOptionKeys.LOWEST_MILEAGE_FIRST]: "Niedrigster Kilometerstand zuerst",
  [SortingOptionKeys.HIGHEST_MILEAGE_FIRST]: "Höchster Kilometerstand zuerst",
};

export enum SortTitle {
  TITLE = "Sortierung",
}

//VEHICLE

export enum VehicleStatus {
  USED = "used",
  NEW = "new",
}

export const vehicleStatusTranslation = {
  [VehicleStatus.USED]: "Gebrauchtwagen",
  [VehicleStatus.NEW]: "Neuwagen",
};

export const VehicleStatusSort = {
  [VehicleStatus.NEW]: 1,
  [VehicleStatus.USED]: 2,
};
