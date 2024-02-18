import { useEffect, useState } from "react";
import InputBootstrap from "react-bootstrap/InputGroup";
import FormBootstrap from "react-bootstrap/Form";
import { ReactComponent as SearchLogo } from "./icons/search.svg";

import "./Search.scss";
import Container from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Label from "../ui-kit/Label/Label";
import { LabelTheme, LabelSize } from "../ui-kit/Label/constants";
import { clearFilterFieldAction } from "../../store/filter/filterSlice";
import { setSearchAction } from "../../store/search/searchSlice";

const Search = ({ actions: { searchHandler } }) => {
  const [label, setLabel] = useState([]);
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filter.filterParams);

  const handleLabelClick = (e) => {
    const filterCategory = e.target.id;
    dispatch(clearFilterFieldAction(filterCategory));
  };

  const handleInputSearch = (e) => {
    const searchValue = e.target.value;
    dispatch(setSearchAction(searchValue));
  };

  useEffect(() => {
    setLabel(() => {
      const newState = Object.entries(filters)
        .filter(([key, value]) => value !== "")
        .map(([key, value]) => <Label onClick={handleLabelClick} id={key} text={value} key={key} size={LabelSize.LARGE} theme={LabelTheme.PRIMARY} />);
      return newState;
    });
  }, [filters]);

  return (
    <Container>
      <div className="search">
        <InputBootstrap onChange={(e) => handleInputSearch(e)} className="mb-3 search__input">
          <InputBootstrap.Text id="basic-addon1">
            <span>
              <SearchLogo />
            </span>
            <div className="search__label-wrapper">{label}</div>
          </InputBootstrap.Text>
          <FormBootstrap.Control onChange={(e) => searchHandler(e)} placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
        </InputBootstrap>
      </div>
    </Container>
  );
};

export default Search;
