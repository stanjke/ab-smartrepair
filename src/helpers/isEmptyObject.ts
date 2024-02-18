export const isEmpty = <T>(obj: T): boolean => Object.keys(obj as Record<string, unknown>).length === 0;
