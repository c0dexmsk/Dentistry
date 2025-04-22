
import { Link } from "react-router-dom";
import Zainap from "../../assets/Zainap.png";
import ZainapSmall from "../../assets/zainapSmall.png";
import Button from '../general/Button';
import roundTooth from "../../assets/round-tooth.png"
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

export default function MainSlide ({MAIN_SWIPER_TITLE, MAIN_SWIPER_TEXT, MAIN_SWIPER_LINK,
    TOOTH_SWIPER_ICON, PERCENT_VALUE, PERCENT_TEXT, HERO_SWIPER_IMAGE}) {

    const buttonRef = useRef(null);

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
                        {MAIN_SWIPER_TEXT}
                    </p>
                    <Button ref={buttonRef} onClick={handleClick}> <Link to={MAIN_SWIPER_LINK}>  Посмотреть кейс </Link></Button>

                    <div>
                    <img src={TOOTH_SWIPER_ICON} alt="Зубы" />
                    <p>
                        <span> {PERCENT_VALUE} </span>
                        {PERCENT_TEXT}
                    </p>
                    </div>
                </div>

            <img className="img-fluid " src={HERO_SWIPER_IMAGE  } alt={MAIN_SWIPER_TITLE} />
        </div>
      </div>
    )
}