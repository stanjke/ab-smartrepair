import ProductCard from "../ProductCard/ProductCard";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import Preloader from "../Preloader/Preloader";
import { useSelector } from "react-redux";
import { filteredCarsSelector } from "../../store/selectors/carsSelectors";
// import { setSearchAction } from "../../store/search/searchSlice";
// import { useDebounced } from "../../hooks/useDebounce";

const PreviewSection = () => {
  const filteredCars = useSelector(filteredCarsSelector);
  // const debounced = useDebounced(search);

  // const searchHandler = (event: ChangeEvent<HTMLInputElement>) => setSearchAction(event.target.value);

  if (filteredCars.length === 0) {
    return (
      <>
        <Filter />
        <Search />
        <Sort />
        <div>PreviewSection</div>
        <Preloader />
      </>
    );
  }

  return (
    <>
      <Filter />
      <Search />
      <Sort />
      {filteredCars?.map((car) => (
        <ProductCard key={car.id} car={car} />
      ))}
    </>
  );
};

export default PreviewSection;
