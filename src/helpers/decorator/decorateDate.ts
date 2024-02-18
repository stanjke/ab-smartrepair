const padToTwoDigits = (num: number) => num.toString().padStart(2, "0");

export const decorateDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = padToTwoDigits(date.getDay());
  const month = padToTwoDigits(date.getMonth() + 1);
  const year = padToTwoDigits(date.getFullYear());

  return `${day}.${month}.${year}`;
};
