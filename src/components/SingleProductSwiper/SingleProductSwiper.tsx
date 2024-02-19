import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SingleProductSwiper.scss";
import ArrowRight from "../ui-kit/Icons/ArrowRight";
import ArrowLeft from "../ui-kit/Icons/ArrowLeft";

interface Props {
  images: string[];
}

const SingleProductSwiper: FC<Props> = ({ images }) => {
  return (
    <section className="car-page__car-image">
      <div className="car-page__car-image__swiper-container">
        <Swiper
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          pagination={{
            type: "fraction",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <img className="car-page__car-image__swiper-img" src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-prev-button">
          <ArrowLeft height="30" width="30" className="arrow-left" />
        </div>
        <div className="custom-next-button">
          <ArrowRight height="30" width="30" className="arrow-right" />
        </div>
      </div>
    </section>
  );
};

export default SingleProductSwiper;
