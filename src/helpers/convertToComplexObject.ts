type Param = Record<string, string>;

export interface ConvertedComplexObject {
  id: string;
  value: string;
  text: string;
}

export const convertToComplexObject = (obj: Param) => Object.entries(obj).map(([key, value]): ConvertedComplexObject => ({ id: key, value: key, text: value }));
