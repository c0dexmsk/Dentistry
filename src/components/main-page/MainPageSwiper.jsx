import React from 'react';
import MainSlide from "./MainSlide"
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from "swiper/react";
import withBitrixData from '../../hocs/withBitrixData';
import 'swiper/css';  // Основные стили
import {Pagination} from 'swiper/modules';
import 'swiper/css/pagination';


 function MainPageSwiper({bitrixData}) {

  return (
    <>

      <Swiper
          className="main-swiper"
          spaceBetween={0}
          slidesPerView={1}
          // onSlideChange={() => console.log('main slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            type: 'bullets'
          }}
          >

          <SwiperSlide>
            <MainSlide
              MAIN_SWIPER_TITLE={bitrixData.MAIN_SWIPER_TITLE}
              MAIN_SWIPER_TEXT ={bitrixData.MAIN_SWIPER_TEXT}
              MAIN_SWIPER_LINK={bitrixData.SWIPER_LINK1}
              TOOTH_SWIPER_ICON={bitrixData.TOOTH_SWIPER_ICON}
              PERCENT_VALUE={bitrixData.PERCENT_VALUE}
              PERCENT_TEXT={bitrixData.PERCENT_TEXT}
              HERO_SWIPER_IMAGE={bitrixData.HERO_SWIPER_IMAGE}
            />
          </SwiperSlide>

      </Swiper>
    </>
  )
};
export default withBitrixData(MainPageSwiper);