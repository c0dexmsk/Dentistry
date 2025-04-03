
import Zainap from "../assets/Zainap.png";
import Button from './Button';
import roundTooth from "../assets/round-tooth.png"

export default function MainSlide () {

    return (
        <div className='main-swiper-wrapper'>
            <div className="main-swiper-slide">
        
                <div className='main-swiper-slide__text'>
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
    )
}