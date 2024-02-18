import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Container from "../Container/Container";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import Preloader from "../Preloader/Preloader";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { filteredCarsSelector } from "../../store/selectors/carsSelectors";
import { useDebounced } from "../../hooks/useDebounce";

const PreviewSection = () => {
  const [search, setSearch] = useState("");
  const filteredCars = useSelector(filteredCarsSelector);
  const debounced = useDebounced(search);

  const searchHandler = (e) => setSearch(e.target.value);

  if (filteredCars.length === 0) {
    return (
      <>
        <Filter />
        <Search actions={{ searchHandler }} />
        <Sort />
        <div>PreviewSection</div>
        <Preloader />
      </>
    );
  }

  return (
    <>
      <Filter />
      <Search actions={{ searchHandler }} />
      <Sort />
      {filteredCars?.map((car) => (
        <ProductCard key={car.id} car={car} />
      ))}
    </>
  );
};

export default PreviewSection;
