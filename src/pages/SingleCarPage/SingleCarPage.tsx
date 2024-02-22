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
import { COMPANY_SERVICES, CURRENCY_SYMBOL, CompanyDetails, TAXATION_NAME, TAX_RATE } from "../../constants/constants";
import { convertKwToHp } from "../../helpers/convertKwToHp";
import { decorator } from "../../helpers/decorator/decorator";
import Phone from "../../components/ui-kit/Icons/Phone";
import NavigationArrow from "../../components/ui-kit/Icons/NavigationArrow";
import classnames from "classnames";
import Contact from "../../components/ui-kit/Icons/Contact";
import Container from "../../components/Container/Container";
import EquipmentSection from "./components/EquipmentSection/EquipmentSection";
import ArrowUp from "../../components/ui-kit/Icons/ArrowUp";

import "./SingleCarPage.scss";

const SingleCarPage = () => {
  const [isEquipmentCollapse, setIsEquipmentCollapse] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);
  const [carData, setCarData] = useState<ICar | null>(null);
  const [imagesArr, setImagesArr] = useState<[] | string[]>([]);
  const [multimedia, setMultimedia] = useState<[] | string[]>([]);
  const [safety, setSafety] = useState<[] | string[]>([]);
  const [comfort, setComfort] = useState<[] | string[]>([]);
  const [extra, setExtra] = useState<[] | string[]>([]);
  const { cars: AllCars } = useSelector((state: RootState) => state.cars);
  const location = useLocation();
  const carId = location.pathname.split("/").reverse()[0];

  useEffect(() => {
    if (AllCars.length > 0) {
      const carsArr = AllCars?.find((car) => car.id === +carId);
      if (carsArr) {
        setCarData(carsArr);
      }

      setIsLoading(false);
    }
  }, [AllCars]);

  useEffect(() => {
    if (carData) {
      if (!isEmpty(carData)) {
        if (carData.images) {
          const imagesArr = carData.images.split(",");

          if (imagesArr[imagesArr.length - 1] === "") {
            setImagesArr(imagesArr.slice(0, -1));
          } else {
            setImagesArr(imagesArr);
          }
        }

        if (carData.multimedia) {
          const multimediaFeatures = carData.multimedia.split(",");
          setMultimedia(multimediaFeatures);
        }

        if (carData.safety) {
          const safetyFeatures = carData.safety.split(",");
          setSafety(safetyFeatures);
        }

        if (carData.comfort) {
          const comfortFeatures = carData.comfort.split(",");
          setComfort(comfortFeatures);
        }

        if (carData.extra) {
          const extraFeatures = carData.comfort.split(",");
          setExtra(extraFeatures);
        }
      }
    }
  }, [carData]);

  const handleEquipmentBtn = () => setIsEquipmentCollapse(!isEquipmentCollapse);

  if (isLoading) {
    return (
      <Container>
        <article className="car-page my-3">
          <header className="car-page__header d-flex justify-content-between">
            <Link to={"/"} className="car-page__nav-link">
              <button className="car-page__nav-btn car-page__nav-btn--orange">
                <NavigationArrow className="car-page__nav-arrow-icon" />
                <span className="car-page__nav-btn__text">Zum Showroom</span>
              </button>
            </Link>
            <ul className="car-page__nav-list d-flex">
              <li className="car-page__nav-item">
                <Link className="car-page__nav-link" to="http://ab-smartrepair.de/#section4">
                  <button className="car-page__nav-btn">
                    <Contact className="car-page__nav-contact-icon" />
                    <span className="car-page__nav-btn__text">Kontaktieren</span>
                  </button>
                </Link>
              </li>
            </ul>
          </header>
          <Preloader />
        </article>
      </Container>
    );
  }

  if (carData) {
    return (
      <Container>
        <article className="car-page">
          <header className="car-page__header">
            <Link to={"/"} className="car-page__nav-link">
              <button className="car-page__nav-btn car-page__nav-btn--orange">
                <NavigationArrow className="car-page__nav-arrow-icon" />
                <span className="car-page__nav-btn__text">Zum Showroom</span>
              </button>
            </Link>
            <ul className="car-page__nav-list d-flex">
              <li className="car-page__nav-item">
                <Link className="car-page__nav-link" to="http://ab-smartrepair.de/#section4">
                  <button className="car-page__nav-btn">
                    <Contact className="car-page__nav-contact-icon" />
                    <span className="car-page__nav-btn__text">Kontaktieren</span>
                  </button>
                </Link>
              </li>
            </ul>
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
              <div className="car-page__detail-info-list-wrapper">
                <ul className="car-page__detail-info-list--first">
                  <li className="car-page__detail-info-item">{`EZ: ${decorator.date(carData.manufacturerDate)}`}</li>
                  <li className="car-page__detail-info-item">{`${decorator.mileage(carData.mileage)} km`}</li>
                  <li className="car-page__detail-info-item">{`Farbe: ${carData.exteriorColorName}`}</li>
                  <li className="car-page__detail-info-item">{`Interieur: ${carData.interior}`}</li>
                </ul>
                <ul className="car-page__detail-info-list--second">
                  <li className="car-page__detail-info-item">{`${carData.engineType} | ${carData.emissionStandard}`}</li>
                  <li className="car-page__detail-info-item">{`${carData.enginePower} kW (${convertKwToHp(carData.enginePower)} PS)`}</li>
                  <li className="car-page__detail-info-item">{`${carData.numberOfCylinders} Zylinder | ${carData.engineSize} cm3`}</li>
                  <li className="car-page__detail-info-item">{`${carData.gearboxType}`}</li>
                </ul>
              </div>
              <div className="car-page__content-info"></div>
            </section>
          </section>
          <section>
            <article className="car-page__equipment">
              <div className="car-page__equipment-btn-wrap">
                <button onClick={handleEquipmentBtn} className="car-page__equipment-btn">
                  <ArrowUp width="16" height="16" className={classnames("car-page__equipment-btn__icon", !isEquipmentCollapse && "car-page__equipment-btn__icon--down")} />
                  <span className="car-page__equipment-btn__text">Ausstattung</span>
                </button>
              </div>
              <div className={classnames("car-page__equipment-wrapper", isEquipmentCollapse && "car-page__equipment-wrapper--hidden")}>
                <EquipmentSection content={multimedia} title="Multimedia und Kommunikation" />
                <EquipmentSection content={safety} title="Sicherheit" />
                <EquipmentSection content={comfort} title="Innenausstattung und Komfort" />
                <EquipmentSection content={extra} title="Extras" />
              </div>
            </article>
          </section>
          <div className={"car-page__additional-about-wrapper"}>
            <section className="car-page__additional">
              <h3 className="car-page__additional-title">Weitere Details</h3>
              <ul className="car-page__additional-list">
                <li className="car-page__additional-item">
                  <h5 className="car-page__additional-prop">Fahrzeug-Nr.:</h5>
                  <p className="car-page__additional-val">{carData?.innerNumber}</p>
                </li>
                <li className="car-page__additional-item">
                  <h5 className="car-page__additional-prop">Standort:</h5>
                  <p className="car-page__additional-val">{carData?.carLocation}</p>
                </li>
                <li className="car-page__additional-item">
                  <h5 className="car-page__additional-prop">HU:</h5>
                  <p className="car-page__additional-val">{decorator.date(carData?.hu)}</p>
                </li>
                <li className="car-page__additional-item">
                  <h5 className="car-page__additional-prop">Karosserieform:</h5>
                  <p className="car-page__additional-val">{carData?.bodyShape}</p>
                </li>
                <li className="car-page__additional-item">
                  <h5 className="car-page__additional-prop">Anzahl der Sitze:</h5>
                  <p className="car-page__additional-val">{carData.seatCount}</p>
                </li>
                <li className="car-page__additional-item">
                  <h5 className="car-page__additional-prop">HSN / TSN:</h5>
                  <p className="car-page__additional-val">{`${carData?.hsn} / ${carData?.tsn}`}</p>
                </li>
              </ul>
            </section>
            <section className="car-page__about">
              <h3 className="car-page__about-title">ÜBER UNS</h3>
              <p className="car-page__about-description">Ein zertifizierter Fachkraft, der sich auf die neuesten Technologien und Entwicklungen im Bereich «Smart-Repair» spezialisiert.</p>
              <ul className="car-page__about-list">
                {COMPANY_SERVICES.map((service) => (
                  <li className="car-page__about-item" key={service}>
                    {service}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <footer className="car-page__footer"></footer>
        </article>
      </Container>
    );
  }
};

export default SingleCarPage;
