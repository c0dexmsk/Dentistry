import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';  // Теперь хук берется из основного пакета
import 'swiper/css';  // Основные стили
import 'swiper/css/navigation'; 

import PersonalReview from "./PersonalReview";
import {React} from "react";
import "../../styles/main-page/Review.css";

import yandexIcon from "../../assets/yandexMapIcon.svg";
import gis2 from "../../assets/GIS2Icon.svg";
import proDoctorov from "../../assets/ProDoctorovIcon.svg";
import arrowPrev from "../../assets/arrow-prev.svg";
import arrowNext from "../../assets/arrow-next.svg";

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

export default function Review () {

    const reviewData = [
        {
            name: "Азиз Магомедов",
            starsCount: 5,
            department: 'Отеделение Хирургия',
            description: "Отличная стоматология. Консультация, чистка зубов и лечение последних выполнено на профессиональном уровне. Доволен результатом. Жаль не успел все зубы полечить. В дальнейшем буду лечиться здесь.",
            icon: yandexIcon,
            iconTitle: "Яндекс.Карты"
        },
        {
            name: "Шамиль Гаджиев",
            starsCount: 5,
            department: 'Отделение Терапия',
            description: "Клиника бомба, лучшая! Алил Казбекович самый лучший стоматолог! Идите к нему, не пожалеете. Опытный, спокойный, профессионал своего дела. Вся семья обслуживается в Бего!",
            icon: gis2,
            iconTitle: "2ГИС"
        },
        {
            name: "Магомед Магомедов",
            starsCount: 5,
            department: 'Отделение Терапия',
            description: "Хотелось бы поблагодарить весь коллектив стоматологии Bego Были проблемы с зубами,обратился к профессионалам, ни секунды не жалел о своем выборе. Доволен результатом. Спасибо большое вам!",
            icon: proDoctorov,
            iconTitle: "ПроДокторов"
        },
        /* Место для добавления отзыва */
    ]

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
                    
                {reviewData.map((review, index) => {
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