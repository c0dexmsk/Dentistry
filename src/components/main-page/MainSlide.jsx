
import Zainap from "../../assets/Zainap.png";
import Button from '../general/Button';
import roundTooth from "../../assets/round-tooth.png"
import withBitrixData from '../../hocs/withBitrixData';

function MainSlide ({ bitrixData }) {

    return (
        <div className='main-swiper-wrapper'>
            <div className="main-swiper-slide">

                <div className='main-swiper-slide__text'>
                    <h1>
                        {bitrixData.MAIN_SWIPER_TITLE}
                    </h1>

                    <p>
                        {bitrixData.MAIN_SWIPER_TEXT}
                    </p>

                    <Button> Посмотреть кейс </Button>

                    <div>
                    <img src={roundTooth} alt="Зубы" />
                    <p>
                        <span> {bitrixData.PERCENT_VALUE} </span>
                        {bitrixData.PERCENT_TEXT}
                    </p>
                    </div>
                </div>

            <img src={bitrixData.HERO_SWIPER_IMAGE} alt="Зайнап" />
        </div>
      </div>
    )
}

export default withBitrixData(MainSlide, 'main_page');