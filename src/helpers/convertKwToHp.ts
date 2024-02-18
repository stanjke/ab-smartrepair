export const convertKwToHp = (kilowatts: number): number => {
  const conversationFactor: number = 1.3596;
  const horsePower: number = Math.round(kilowatts * conversationFactor);
  return horsePower;
};
