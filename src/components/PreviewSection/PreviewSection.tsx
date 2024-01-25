import React, { useEffect, useState } from "react";
import { fetchLocalJson } from "../../helpers/fetchLocalJson";
import ProductCard from "../ProductCard/ProductCard";
import Container from "../Container/Container";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import { useGetAllCarsQuery } from "../../store/serverResponse/googleWebAppApi";
import Preloader from "../Preloader/Preloader";

const PreviewSection = () => {
  const { data: allCarsData, isLoading } = useGetAllCarsQuery();

  const [search, setSearch] = useState("");

  const searchHandler = (e) => setSearch(e.target.value);

  return (
    <Container>
      <Filter />
      <Search actions={{ searchHandler }} />
      <Sort />
      <div>PreviewSection</div>
      <div>
        {isLoading ? (
          <Preloader />
        ) : (
          allCarsData
            ?.filter((item) => {
              return search.toLowerCase() === "" ? item : item.manufacturerName.toLowerCase().includes(search);
            })
            .map((car) => (
              <ProductCard
                key={car.id}
                car={car}
                // manufacturerName={car.manufacturerName}
                // modelName={car.modelName}
              />
            ))
        )}
      </div>
    </Container>
  );
};

export default PreviewSection;
