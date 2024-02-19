import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container/Container";
import DropDown from "../DropDown/DropDown";
import { RootState } from "../../store";
import { setEngineTypeAction, setGearTypeAction, setManufactureAction, setModelAction, setPriceAction, setRegistrationAction } from "../../store/filter/filterSlice";

import "./Filter.scss";
import { Row, Col } from "react-bootstrap";
import { FilterParam } from "../../constants/constants";

const Filter = () => {
  const { engineType, gearType, manufacture, model, price, registration } = useSelector((state: RootState) => state.filterOptions);

  const dispatch = useDispatch();

  const handleManufacture = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setManufactureAction(e.target.value));
  };
  const handleModel = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setModelAction(e.target.value));
  };
  const handleEngineType = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setEngineTypeAction(e.target.value));
  };
  const handleGearType = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGearTypeAction(e.target.value));
  };
  const handlePrice = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPriceAction(e.target.value));
  };
  const handleRegistration = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRegistrationAction(e.target.value));
  };

  return (
    <Container>
      <section className="filter ">
        <h2 className="filter__title">AB-SmartRepair-Showroom</h2>
        <div className="filter__content">
          <div className="filter__manufactures">
            <Row>
              <Col xs={12} md={6} xl={3}>
                <DropDown className={"filter__dropdown"} formTitle={FilterParam.MANUFACTURE} options={manufacture} onChange={handleManufacture} />
              </Col>
              <Col xs={12} md={6} xl={3}>
                <DropDown className={"filter__dropdown"} formTitle={FilterParam.MODEL} options={model} onChange={handleModel} />
              </Col>
            </Row>
          </div>
          <div className="filter__feature">
            <Row>
              <Col xs={12} md={6} xl={3}>
                <DropDown className={"filter__dropdown"} formTitle={FilterParam.ENGINETYPE} options={engineType} onChange={handleEngineType} />
              </Col>
              <Col xs={12} md={6} xl={3}>
                <DropDown className={"filter__dropdown"} formTitle={FilterParam.GEARTYPE} options={gearType} onChange={handleGearType} />
              </Col>

              <Col xs={12} md={6} xl={3}>
                <DropDown isComplex className={"filter__dropdown"} formTitle={FilterParam.PRICE} options={price} onChange={handlePrice} />
              </Col>
              <Col xs={12} md={6} xl={3}>
                <DropDown isComplex className={"filter__dropdown"} formTitle={FilterParam.REGISTRATION} options={registration} onChange={handleRegistration} />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Filter;
