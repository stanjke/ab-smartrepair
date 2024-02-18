import { ICar } from "../../types/types";
import { FC } from "react";
import { Link } from "react-router-dom";
import { translateDeliveryStatus } from "../../helpers/translators/translateDeliveryStatus";
import { translateVehicleStatus } from "../../helpers/translators/translateVehicleStatus";
import { convertKwToHp } from "../../helpers/convertKwToHp";
import "./ProductCard.scss";
import { calculateNetPrice } from "../../helpers/calculateNetPrice";
import { CURRENCY_SYMBOL, TAXATION_NAME, TAX_RATE } from "../../constants/constants";
import { decorator } from "../../helpers/decorator/decorator";

interface IProductCardProps {
  car: ICar;
}

const ProductCard: FC<IProductCardProps> = ({ car }) => {
  const carImages = car.images.split(",");

  return (
    <article className="car-card">
      <Link className="car-card__link" to={`car/${car.id}`}>
        <div className="car-card__image-wrapper">
          <img className="car-card__img" src={carImages[0]} alt="" />
        </div>
        <section className="car-card__details">
          <div className="car-card__content">
            <h2 className="car-card__manufacturer">{`${car.manufacturerName} ${car.modelName}`}</h2>
            <p className="car-card__title">{car.title}</p>
            <h3 className="car-card__info">
              {`AB-SmartRepair | ${translateVehicleStatus(car.state)} | ${car.innerNumber} | `}
              <span className="car-card__info-delivery--green">{translateDeliveryStatus(car.delivery)}</span>
            </h3>
            <ul className="car-card__list">
              <li className="car-card__item">
                <p className="car-card__item-description">
                  <span className="car-card__item-title">Erstzulassung: </span>
                  {decorator.date(car.registration)}
                </p>
              </li>
              <li className="car-card__item">
                <p className="car-card__item-description">
                  <span className="car-card__item-title">Motor: </span>
                  {`${car.enginePower} kW (${convertKwToHp(car.enginePower)} PS)`}
                </p>
              </li>
              <li className="car-card__item">
                <p className="car-card__item-description">
                  <span className="car-card__item-title">Kraftstoff: </span>
                  {car.engineType}
                </p>
              </li>
              <li className="car-card__item">
                <p className="car-card__item-description">
                  <span className="car-card__item-title">Laufleistung: </span>
                  {decorator.mileage(car.mileage)} km
                </p>
              </li>
              <li className="car-card__item">
                <p className="car-card__item-description">
                  <span className="car-card__item-title">Getriebe: </span>
                  {car.gearboxType}
                </p>
              </li>
              <li className="car-card__item">
                <p className="car-card__item-description">
                  <span className="car-card__item-title">Farbe: </span>
                  {car.exteriorColorName}
                </p>
              </li>
            </ul>
          </div>
          <div className="car-card__price-wrap">
            <p className="car-card__price">{`${decorator.price(car.currentPrice)} ${CURRENCY_SYMBOL}`}</p>
            <p className="car-card__price-tax">{`${calculateNetPrice(car.currentPrice)}, ${TAX_RATE}% ${TAXATION_NAME}.`}</p>
          </div>
        </section>
      </Link>
    </article>
  );
};

export default ProductCard;
