const interpolatePriceRange = (minPrice: number, maxPrice: number): number[] => {
  const priceRange = [];
  const roundedMinPrice = Math.ceil(minPrice / 1000) * 1000;
  const roundedMaxPrice = Math.ceil(maxPrice / 1000) * 1000;

  for (let price = roundedMinPrice; price <= roundedMaxPrice; price += 1000) {
    priceRange.push(price);
  }
  return priceRange;
};

export default interpolatePriceRange;
