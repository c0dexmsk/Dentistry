import React from 'react';
import MainSlide from "./MainSlide"
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from "swiper/react"; 
import 'swiper/css';  // Основные стили
import "../../styles/main-page/MainPageSwiper.css";
import {Pagination} from 'swiper/modules';
import 'swiper/css/pagination';

export default function MainPageSwiper () {

  return (
    <>
      
      <Swiper
          className="main-swiper"
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('main slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination]}
          pagination={{ 
            clickable: true,
            type: 'bullets' 
          }}
          >
              
          <SwiperSlide>
            <MainSlide />
          </SwiperSlide>

          <SwiperSlide>
            <MainSlide />
          </SwiperSlide>

          <SwiperSlide>
            <MainSlide />
          </SwiperSlide>

      </Swiper>
    </>
  )
};
