import { ICar } from "../../types/types";
import { FC } from "react";
import "./ProductCard.scss";

const log = console.log;

interface IProductCardProps {
  car: ICar;
}

// export interface ICar {
//     id: string
//     vin: string
//     innerNumber: string
//     hsn: string
//     tsn: string
//     modelKey: string
//     manufacturerName: string
//     state: string
//     delivery: string
//     registration: string
//     title: string
//     enginePower: number
//     engineType: string
//     mileage: number
//     gearboxType: string
//     exteriorColorName: string
//     previousPrice: number
//     currentPrice: number
//     nefz: Nefz
//     wltp: Wltp
//     modelName: string
//     images: string[]
// }

// export interface Nefz {
//     consumptionElectricity: number
//     eaerRangeCombined: number
//     eaerRangeInTown: number
// }

// export interface Wltp {
//     consumptionAverage: number
// }

const kwToHpHandler = (kilowatts: number): number => {
  const conversationFactor: number = 1.3596;
  const horsePower: number = Math.round(kilowatts * conversationFactor);
  return horsePower;
};

const ProductCard: FC<IProductCardProps> = ({ car }) => {
  const carImages = car.images.split(",");
  const imagePath = `../../../images/${car.id}/` + carImages[0];
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <img className="card__img" src={imagePath} alt="" />
      </div>
      <div className="card__content px-2">
        <p className="card__info">
          {`AB-SmartRepair | ${car.state} | ${car.innerNumber} | `}
          <span className="card__info-green">{car.delivery}</span>
        </p>
        <h3 className="card__manufacture">{`${car.manufacturerName} ${car.modelName}`}</h3>
        <h5 className="card_title">{car.title}</h5>
        <div className="card__sub-content">
          <ul className="sub-content__list">
            <li className="sub-content__item">
              <p className="sub-content__description">
                <span>Erstzulassung: </span>
                {car.registration}
              </p>
            </li>
            <li className="sub-content__item">
              <p className="sub-content__description">
                <span>Motor: </span>
                {`${car.enginePower} kW (${kwToHpHandler(car.enginePower)})`}
              </p>
            </li>
            <li className="sub-content__item">
              <p className="sub-content__description">
                <span>Kraftstoff: </span>
                {car.engineType}
              </p>
            </li>
            <li className="sub-content__item">
              <p className="sub-content__description">
                <span>Laufleistung: </span>
                {car.mileage} km
              </p>
            </li>
            <li className="sub-content__item">
              <p className="sub-content__description">
                <span>Getriebe: </span>
                {car.gearboxType}
              </p>
            </li>
            <li className="sub-content__item">
              <p className="sub-content__description">
                <span>Farbe: </span>
                {car.exteriorColorName}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
