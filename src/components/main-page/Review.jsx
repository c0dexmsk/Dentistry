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

const SwiperButtons = () => {
    const swiper = useSwiper(); // Получаем экземпляр Swiper

    return (
      <div className="swiper-buttons">
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
    
    // const reviewData = [
    //     {
    //         // name: "Азиз Магомедов",
    //         name: bitrixData[1].name,
    //         starsCount: bitrixData[1].starsCount,
    //         department: bitrixData[1].department,
    //         description: bitrixData[1].description,
    //         icon: bitrixData[1].icon,
    //         iconTitle: bitrixData[1].iconTitle
    //     },
    //     {
    //         name: bitrixData[0].name,
    //         starsCount: bitrixData[0].starsCount,
    //         department: bitrixData[0].department,
    //         description: bitrixData[0].description,
    //         icon: bitrixData[0].icon,
    //         iconTitle: bitrixData[0].iconTitle
    //     },
    //     {
    //         name: "Магомед Магомедов",
    //         starsCount: 5,
    //         department: 'Отделение Терапия',
    //         description: "Хотелось бы поблагодарить весь коллектив стоматологии Bego Были проблемы с зубами,обратился к профессионалам, ни секунды не жалел о своем выборе. Доволен результатом. Спасибо большое вам!",
    //         icon: proDoctorov,
    //         iconTitle: "ПроДокторов"
    //     },
    //     /* a place to add a review  */
    // ]

    return (
        <>
             <Swiper
                className="review-swiper"
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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