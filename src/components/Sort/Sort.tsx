import Container from "../Container/Container";
import { ReactComponent as Clock } from "./icons/clock.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Sort.scss";
import DropDown from "../DropDown/DropDown";

export interface IMocKFormSortData {
  text: string;
  value: string;
  id: number;
}

const mockFormSortData: IMocKFormSortData[] = [
  {
    text: "Alle",
    value: "alle",
    id: 0,
  },
  {
    text: "Sofort verfügbar",
    value: "sort1",
    id: 1,
  },
  {
    text: "auf Lager inkl. 10 Tage Vorlauf",
    value: "sort2",
    id: 2,
  },
  {
    text: "ab 10 Tage Vorlauf",
    value: "sort3",
    id: 3,
  },
];

const Sort = () => {
  return (
    <Container>
      <section className="sort">
        <div className="sort__content">
          <div className="content__result">
            <h4 className="result__info">
              Treffer:
              <span className="result__count">5</span>
            </h4>
          </div>
          <div className="content__sort-bar">
            <DropDown formTitle={"Verfügbarkeit"} options={mockFormSortData} formIcon={<Clock />} isComplex />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Sort;
