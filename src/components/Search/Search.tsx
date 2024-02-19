import { FC, useEffect, useState, ChangeEvent, MouseEvent } from "react";
import InputBootstrap from "react-bootstrap/InputGroup";
import FormBootstrap from "react-bootstrap/Form";
import { ReactComponent as SearchLogo } from "./icons/search.svg";

import "./Search.scss";
import Container from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Label from "../ui-kit/Label/Label";
import { LabelTheme, LabelSize } from "../ui-kit/Label/constants";
import { FilterParams, clearFilterFieldAction } from "../../store/filter/filterSlice";
import { setSearchAction } from "../../store/search/searchSlice";

const Search: FC = () => {
  const [label, setLabel] = useState<React.ReactNode[]>([]);
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filter.filterParams);

  const handleLabelClick = (event: MouseEvent<HTMLSpanElement>) => {
    const filterCategory = (event.target as HTMLSpanElement).id as keyof FilterParams;
    dispatch(clearFilterFieldAction(filterCategory));
  };

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    dispatch(setSearchAction(searchValue));
  };

  useEffect(() => {
    const newState = Object.entries(filters)
      .filter(([, value]) => value !== "")
      .map(([key, value]) => <Label onClick={handleLabelClick} id={key} text={value} key={key} size={LabelSize.LARGE} theme={LabelTheme.PRIMARY} />);
    setLabel(newState);
  }, [filters]);

  return (
    <Container>
      <div className="search">
        <InputBootstrap className="mb-3 search__input">
          <InputBootstrap.Text id="basic-addon1">
            <span>
              <SearchLogo />
            </span>
            <div className="search__label-wrapper">{label}</div>
          </InputBootstrap.Text>
          <FormBootstrap.Control onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputSearch(e)} placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
        </InputBootstrap>
      </div>
    </Container>
  );
};

export default Search;
