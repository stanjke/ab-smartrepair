import { ChangeEvent } from "react";
import Container from "../Container/Container";
import "./Sort.scss";
import DropDown from "../DropDown/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { filteredCarsSelector } from "../../store/selectors/carsSelectors";
import { SortTitle, sortingOptionTranslations } from "../../constants/constants";
import { setSortAction } from "../../store/sort/sortSlice";
import { convertToComplexObject } from "../../helpers/convertToComplexObject";
import SortIcon from "../ui-kit/Icons/SortIcon";

export interface IMocKFormSortData {
  text: string;
  value: string;
  id: number;
}

const Sort = () => {
  const dispatch = useDispatch();
  const handleSetSort = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortAction(event.target.value));
  };

  const filteredCars = useSelector(filteredCarsSelector);

  return (
    <Container>
      <section className="sort">
        <div className="sort__content">
          <div className="content__result">
            <h4 className="result__info">
              Treffer:
              <span className="result__count">{filteredCars.length}</span>
            </h4>
          </div>
          <div className="content__sort-bar">
            <DropDown formTitle={SortTitle.TITLE} options={convertToComplexObject(sortingOptionTranslations)} formIcon={<SortIcon />} onChange={handleSetSort} isComplex />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Sort;
