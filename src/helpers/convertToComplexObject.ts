type Param = Record<string, unknown>;

export const convertToComplexObject = (obj: Param) => Object.entries(obj).map(([key, value]) => ({ id: key, value: key, text: value }));
