import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import DropDown from "../DropDown/DropDown";
import { ICar } from "../../types/types";

import "./Filter.scss";
import { useGetAllCarsQuery } from "../../store/serverResponse/googleWebAppApi";

const Filter = () => {
  const { data: AllCars, isLoading } = useGetAllCarsQuery();

  const uniqManufacturesArr = [...new Set(AllCars?.map((car: ICar): string => car["manufacturerName"]))];
  const uniqModelsArr = [...new Set(AllCars?.map((car: ICar): string => car["modelName"]))];
  const uniqEngineTypeArr = [...new Set(AllCars?.map((car: ICar): string => car["engineType"]))];
  const uniqGearTypeArr = [...new Set(AllCars?.map((car: ICar): string => car["manufacturerName"]))];

  return (
    <Container>
      <section className="filter">
        <h2 className="filter__title">AB-SmartRepair-Showroom</h2>
        <div className="filter__content">
          <div className="manufactures">
            {/* {!isLoading && <DropDown className={"manufactures__DropDown"} DropDownTitle={"Alle Hersteller"} disabled={false} options={uniqManufacturesArr} />} */}
            <DropDown className={"manufactures__DropDown"} formTitle={"Alle Hersteller"} disabled={false} options={uniqManufacturesArr} />
            <DropDown className={"manufactures__DropDown"} formTitle={" Alle Modelle "} disabled={false} options={uniqModelsArr} />
          </div>
          <div className="feature">
            <DropDown className={"feature__DropDown"} formTitle={" Kraftstoff "} disabled={false} options={uniqEngineTypeArr} />
            <DropDown className={"feature__DropDown"} formTitle={" Getriebe "} options={uniqGearTypeArr} />
            <DropDown className={"feature__DropDown"} formTitle={" Preis bis "} disabled={false} />
            <DropDown className={"feature__DropDown"} formTitle={" Erstzulassung ab "} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Filter;
