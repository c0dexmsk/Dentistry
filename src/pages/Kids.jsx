import ServicesAndPrice from "../components/kids/ServicesAndPrice.jsx";
import KidsDoctors from "../components/kids/KidsDoctors.jsx";
import DefautCard from "../components/about/DefaultCard.jsx";
import Title from "../components/about/Title.jsx";
import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import starPicture from "../assets/starPicture.svg";
import housePicture from "../assets/HousePicture.svg";
import smileStarPicture from "../assets/smileStarPicture.svg";
import flowerPicture from "../assets/flowerPicture.svg";
import Video from "../components/about/Video.jsx";
import rocket from "../assets/rocketPicture.svg"
import pinkFlower from "../assets/flowerPinkPicture.svg"
import cat from "../assets/catPicture.svg"
import curve from "../assets/curvePicture.svg"
import yellowFlower from "../assets/flowerYellowPicture.svg"
import rainbow from "../assets/rainbowPicture.svg"
import star2 from "../assets/starPicture2.svg"
import comfort from "../assets/comfotrable.svg"
import tool from "../assets/toolPhoto.png"
import { Link } from "react-router-dom";
import goal from "../assets/goal.svg"
import safe from "../assets/safe.svg"

import aizanat from "../assets/doctors/aizanat.png";
import dina from "../assets/doctors/dina.png";
import kamila from "../assets/doctors/kamilla.png";
import siadat from "../assets/doctors/siadat.png";
import elina from "../assets/doctors/elina.png";
import muslim from "../assets/doctors/muslim.png";
import asiat from "../assets/doctors/asiat.png";
import malikat from "../assets/doctors/malikat.png";

export default function Kids() {

    const kidsDoctors = [
        {
            photo: aizanat,
            name: "Абдурахманова Айзанат",
            profession: "Детский стоматолог",
        },
        {
            photo: dina,
            name: "Гасанова Дина Абдулгаджиевна",
            profession: "Подростковый ортопед",
        },
        {
            photo: kamila,
            name: "Даудова Камила Гамзатовна",
            profession: "Детский стоматолог",
        },
        {
            photo: siadat,
            name: "Ибрагимова Сиядат Магомедовна",
            profession: "Детский стоматолог",
        },
        {
            photo: elina,
            name: "Курбанова Элина Багарчиевна",
            profession: "Детский стоматолог",
        },
        {
            photo: muslim,
            name: "Мурзабеков Муслим Мурзабекович",
            profession: "Детский стоматолог",
        },
        {
            photo: asiat,
            name: "Мурилова Асият Магомедовна",
            profession: "Детский стоматолог",
        },
        {
            photo: malikat,
            name: "Мусаева Маликат Магомедшапиевна",
            profession: "Детский стоматолог",
        },
    ]

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                    <div className="kids">
                        <div className="main-page-wrapper__pictures">

                            <img className="star-picture" src={starPicture} alt="Фотография Звезды" />
                            <img className="house-picture" src={housePicture} alt="Фотография Дома" />
                            <img className="smile-star-picture" src={smileStarPicture} alt="Фотография Звезды" />
                            <img className="flower-picture" src={flowerPicture} alt="Фотография Дома" />
                            <img className="rocket-picture" src={rocket} alt="Фотография Дома" />

                            <img className="flower-pink-picture" src={pinkFlower} alt="Фотография Цветочка" />
                            <img className="cat-picture" src={cat} alt="Фотография Кошки" />
                            <img className="curve-picture" src={curve} alt="Фотография Кривой" />
                            <img className="flower-yellow-picture" src={yellowFlower} alt="Фотография Цветка" />
                            <img className="rainbow-picture" src={rainbow} alt="Фотография Радуги" />
                            <img className="star2-picture" src={star2} alt="Фотография Звезды" />
                        </div>
                        <Title
                            titleh1="Дети"
                            titleh2="Bego Kids"
                            description1="Все виды детской стоматологии: от чистки до лечения сложных случаев. Используем современные методы и материалы, чтобы сохранить зубки здоровыми и гарантировать лучший результат.  Комфорт и безопасность каждого ребенка – особый приоритет нашей команды. "
                            description2="Bego – место позитивных эмоций. Игры, мультфильмы, врачи, говорящие с детьми на одном языке – все для того, чтобы визит к нам стал приятным приключением.  А регулярные бесплатные профилактические осмотры помогут вовремя предотвратить проблемы и привить ребенку любовь к заботе о себе. "
                        />
                        <Video />

                        <section className="container-fluid p-0">
                            <DefautCard
                                title="Современное оборудование"
                                description1="Отделение оснащено передовым оборудованием для точной диагностики и безболезненного лечения. Микроскопы ZEISS позволяют врачам проводить сложнейшие манипуляции (например, эндодонтическое лечение) максимально выверенно."
                                description2="Безопасная седация с помощью аппаратов Drager и Matrx, а также щадящая чистка AIRFLOW® Prophylaxis Master гарантируют комфорт даже самым маленьким пациентам."
                                image={tool}
                                icon1={goal}
                                icon2={safe}
                                icon3={comfort}
                                icon1Title="Точно"
                                icon2Title="Безопасно"
                                icon3Title="Комфортно"
                            />
                        </section>

                        <ServicesAndPrice />
                        <KidsDoctors
                            kidsDoctors={kidsDoctors}
                        />

                        <div className="service__button-container">
                            <Link to="/kids">
                                Все десткие врачи
                            </Link>
                        </div>

                    </div>
                <Footer />
            </div>
        </>
    )
}