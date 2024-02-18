import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SingleProductSwiper from "../../components/SingleProductSwiper/SingleProductSwiper";
import { ICar } from "../../types/types";
import { isEmpty } from "../../helpers/isEmptyObject";
import Preloader from "../../components/Preloader/Preloader";
import { translateVehicleStatus } from "../../helpers/translators/translateVehicleStatus";
import { translateDeliveryStatus } from "../../helpers/translators/translateDeliveryStatus";
import { calculateNetPrice } from "../../helpers/calculateNetPrice";
import { CURRENCY_SYMBOL, CompanyDetails, TAXATION_NAME, TAX_RATE } from "../../constants/constants";
import { convertKwToHp } from "../../helpers/convertKwToHp";
import { decorator } from "../../helpers/decorator/decorator";
import Phone from "../../components/ui-kit/Icons/Phone";

import "./SingleCarPage.scss";
import NavigationArrow from "../../components/ui-kit/Icons/NavigationArrow";

const SingleCarPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [carData, setCarData] = useState<ICar>({});
  const [imagesArr, setImagesArr] = useState<[] | string[]>([]);
  const { cars: AllCars } = useSelector((state: RootState) => state.cars);
  const location = useLocation();
  const carId = location.pathname.split("/").reverse()[0];

  useEffect(() => {
    if (AllCars.length > 0) {
      setCarData(AllCars.find((car) => car.id === +carId));
      setIsLoading(false);
    }
  }, [AllCars]);

  useEffect(() => {
    if (!isEmpty(carData) && carData.images) {
      const imagesArr = carData.images.split(",");
      if (imagesArr[imagesArr.length - 1] === "") {
        setImagesArr(imagesArr.slice(0, -1));
      } else {
        setImagesArr(imagesArr);
      }
    }
  }, [carData]);

  if (isLoading) {
    return (
      <article className="car-page my-3">
        <header className="car-page__header d-flex justify-content-between">
          <Link to={"/"}>
            <button className="car-page__nav-btn car-page__nav-btn--orange">
              <NavigationArrow />
            </button>
          </Link>
        </header>
        <Preloader />
      </article>
    );
  }

  return (
    <article className="car-page">
      <header className="car-page__header">
        <Link to={"/"}>
          <button className="car-page__nav-btn car-page__nav-btn--orange">
            <NavigationArrow className="" />
          </button>
        </Link>
        {/* <ul className="car-page__features d-flex">
          <li className="car-page__feature__item">
            <button className="car-page__nav-btn">
              <i></i>
              <span>Probefahrt</span>
            </button>
          </li>
          <li className="car-page__feature__item">
            <button className="car-page__nav-btn">
              <i></i>
              <span>Drucken</span>
            </button>
          </li>
          <li className="car-page__feature__item">
            <button className="car-page__nav-btn">
              <i></i>
              <span>Teilen</span>
            </button>
          </li>
        </ul> */}
      </header>
      <section className="car-page__car-info">
        <header>
          <h2 className="car-page__car-info-title">
            <span className="car-page__car-info-title__manufacturer">{`${carData.manufacturerName} ${carData?.modelName}`}</span>
            <span>{carData?.title}</span>
          </h2>
        </header>
        <SingleProductSwiper images={imagesArr} />
        <section className="car-page__content-detail-info">
          <h3 className="car-page__content-vehicle-status">{translateVehicleStatus(carData.state)}</h3>
          <p className="car-page__content-abvailability">{translateDeliveryStatus(carData.delivery)}</p>
          <div className="car-page__content-price-wrap">
            <p className="car-page__content-price-wrap__price">{`${decorator.price(carData.currentPrice)} ${CURRENCY_SYMBOL}`}</p>
            <p className="car-page__content-price-wrap__taxes">{`${calculateNetPrice(carData.currentPrice)}, ${TAX_RATE}% ${TAXATION_NAME}.`}</p>
          </div>
          <p className="car-page__content-tel">
            <Phone width="16" height="16" className="fill-gray" />
            <span className="car-page__content-tel__text">{CompanyDetails.MOBILE_PHONE}</span>
          </p>
          <ul className="car-page__detail-info-list">
            <li className="car-page__detail-info-item">{`EZ: ${decorator.date(carData.manufacturerDate)}`}</li>
            <li className="car-page__detail-info-item">{`${decorator.mileage(carData.mileage)} km`}</li>
            <li className="car-page__detail-info-item">{`Farbe: ${carData.exteriorColorName}`}</li>
            <li className="car-page__detail-info-item">{`Interieur: ${carData.interior}`}</li>
            <li className="car-page__detail-info-item">{`${carData.engineType} | ${carData.emissionStandard}`}</li>
            <li className="car-page__detail-info-item">{`${carData.enginePower} kW (${convertKwToHp(carData.enginePower)} PS)`}</li>
            <li className="car-page__detail-info-item">{`${carData.numberOfCylinders} Zylinder | ${carData.engineSize} cm3`}</li>
            <li className="car-page__detail-info-item">{`${carData.gearboxType}`}</li>
          </ul>
          <div className="car-page__content-info"></div>
        </section>
      </section>
      <section>
        <article className="car-page__equipment">
          <div className="car-page__equipment-btn-wrap">
            <div className="car-page__equipment-btn">
              <span className="car-page__equipment-btn__icon"></span>
              <span className="car-page__equipment-btn__text">Ausstattung</span>
            </div>
          </div>
          <section className="car-page__equipment__media">
            <ul className="car-page__equipment__media-list">{}</ul>
          </section>
          <section className="car-page__equipment__safety">
            <ul className="car-page__equipment__safety-list">{}</ul>
          </section>
          <section className="car-page__equipment__comfort">
            <ul className="car-page__equipment__comfort-list">{}</ul>
          </section>
          <section className="car-page__equipment__extra">
            <ul className="car-page__equipment__extra-list">{}</ul>
          </section>
        </article>
      </section>
      <section className="car-page__emissions"></section>
      <section className="car-page__additional"></section>
      <footer className="car-page__footer"></footer>
    </article>
  );
};

export default SingleCarPage;
