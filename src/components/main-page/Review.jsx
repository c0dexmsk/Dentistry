import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';  // Теперь хук берется из основного пакета
import 'swiper/css';  // Основные стили
import 'swiper/css/navigation';

import PersonalReview from "./PersonalReview";
import {React} from "react";

import yandexIcon from "../../assets/yandexMapIcon.svg";
import gis2 from "../../assets/GIS2Icon.svg";
import proDoctorov from "../../assets/ProDoctorovIcon.svg";
import arrowPrev from "../../assets/arrow-prev.svg";
import arrowNext from "../../assets/arrow-next.svg";
import withBitrixReviewsData from '../../hocs/withBitrixReviewsData';
import { useMediaQuery } from "react-responsive";

const SwiperButtons = () => {
    const swiper = useSwiper(); // Получаем экземпляр Swiper

    return (
      <div className="swiper-buttons d-none d-md-flex">
        <button onClick={() => swiper.slidePrev()}>
          <img src={arrowPrev} alt="Назад" />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <img src={arrowNext} alt="Вперед" />
        </button>
      </div>
    );
};

function Review ({bitrixData}) {

    const isDesktop = useMediaQuery ({minWidth: 768});

    return (
        <>
             <Swiper
                className="review-swiper"
                loop={true}
                spaceBetween={isDesktop ? 20 : -40}
                slidesPerView={isDesktop ? 3 : 1.2}
                slidesOffsetBefore={isDesktop ? 0 : 5}
                >

                <SwiperButtons />

                {bitrixData.map((review, index) => {
                    return (
                        <SwiperSlide>
                            <div className="review-swiper__slide">
                                <PersonalReview
                                    key={index}
                                    name={review.name}
                                    starsCount={review.starsCount}
                                    department={review.department}
                                    description={review.description}
                                    icon={review.icon}
                                    iconTitle={review.iconTitle}
                                />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
export default withBitrixReviewsData(Review)