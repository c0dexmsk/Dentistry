import { Link } from "react-router-dom";
import Zainap from "../../assets/Zainap.png";
import ZainapSmall from "../../assets/zainapSmall.png";
import Button from '../general/Button';
import roundTooth from "../../assets/round-tooth.png"
import { useMediaQuery } from "react-responsive";
import zainapMobile from "assets/zainapMobile.png"
import { useRef } from "react";
import zainapnotsafari from 'assets/zainapnotsafari.webm';
export default function MainSlide ({MAIN_SWIPER_TITLE, MAIN_SWIPER_TEXT, MAIN_SWIPER_LINK,
    TOOTH_SWIPER_ICON, PERCENT_VALUE, PERCENT_TEXT, HERO_SWIPER_IMAGE}) {

    const buttonRef = useRef(null);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const handleClick = () => {
        const link = buttonRef.current.querySelector('a');
        if (link) {
        link.click();
        }
    };

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div className='main-swiper-wrapper'>
            <div className="main-swiper-slide">

                <div className='main-swiper-slide__text'>
                    <h1>
                        {MAIN_SWIPER_TITLE}
                    </h1>

                    <p>
                        {!isDesktop ? (MAIN_SWIPER_TEXT.split('.')[0] + '.') : (MAIN_SWIPER_TEXT)}
                    </p>
                    <Button ref={buttonRef} onClick={handleClick}> <Link to={MAIN_SWIPER_LINK}>  Посмотреть кейс </Link></Button>

                    <div>
                    <img src={TOOTH_SWIPER_ICON} alt="Зубы" />
                    <p className="tooth">
                        <span> {PERCENT_VALUE} </span>
                        <span>{PERCENT_TEXT}</span>
                    </p>
                    </div>
                </div>
                {
                    isDesktop ? (

                        <video muted autoPlay loop playsInline className="img-fluid" src={isSafari ? HERO_SWIPER_IMAGE : zainapnotsafari} alt={MAIN_SWIPER_TITLE} />
                    ) : (
                        <>
                            <div className="video-gradient">
                            </div>
                            <video muted autoPlay loop playsInline className="img-fluid" src={isSafari ? HERO_SWIPER_IMAGE : zainapnotsafari} alt={MAIN_SWIPER_TITLE} />

                        </>
                    )
                }
        </div>
      </div>
    )
}