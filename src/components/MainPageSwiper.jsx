import React from 'react';
// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css'; // Важно для v5
import Zainap from "../assets/Zainap.png";
import "../styles/MainPageSwiper.css";
import Button from './Button';
import roundTooth from "../assets/round-tooth.png"

export default function MainPageSwiper () {

  // document.addEventListener('DOMContentLoaded', function() {

  //   const swiper = new Swiper('.swiper', {
  //     // Основные параметры
  //     loop: true,
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //     centeredSlides: true,
      
  //     // Автопрокрутка
  //     autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //     },
      
  //     // Пагинация (точки)
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
      
  //     // Навигация (стрелки)
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
      
  //     // Эффекты (опционально)
  //     effect: 'slide', // можно использовать 'fade', 'cube', 'coverflow' и др.
  //   });
  // });
  
  
  return (
    <>
      <div className='swiper-wrapper'>
        <div className="swiper-slide">
        
          <div className='swiper-slide__text'>
            <h1>
            Вам улыбается Зайнап
            </h1>

            <p>
              История Зайнап — это путь от неуверенности
              к ослепительному сиянию. Раньше она словно прятала
              свою уникальность, теперь же её лицо излучает гармонию
              и спокойствие.
            </p>

            <Button> Посмотреть кейс </Button>

            <div>
              <img src={roundTooth} alt="Зубы" />
              <p>
                <span> 88% </span>
                Возвращаются к нам с семьей
              </p>
            </div>
          </div>

          <img src={Zainap} alt="Зайнап" />
        </div>
      </div>
    </>
  )
};



{/* <section className="swiper">
  <div className="swiper-wrapper">
    
  </div>
      // <div className="swiper-slide">Слайд 2</div>
      // <div className="swiper-slide">Слайд 3</div> *

  <div className="swiper-pagination"></div>
  <div className="swiper-button-next"></div>
  <div className="swiper-button-prev"></div>
</section> */}
