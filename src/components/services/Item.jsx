
import { useMediaQuery } from "react-responsive";
// import { Link } from "react-router-dom"
import { FadeInTextLeft , FadeInTextRight } from "components/FadeInText";
import { HashLink as Link } from 'react-router-hash-link';
import s0 from "assets/services/Serv (1).png";
import s1 from "assets/services/Serv (7).png";
import s2 from "assets/services/Serv (2).png";
import s3 from "assets/services/Serv (3).png";
import s4 from "assets/services/Serv (8).png";
import s5 from "assets/services/Serv (10).png";
import s6 from "assets/services/Serv (4).png";
import s7 from "assets/services/Serv (9).png";
import s8 from "assets/services/Serv (5).png";
import s9 from "assets/services/Serv (6).png";

export default function Item ({title, backgroundColor, link,description,innerServices}) {

    const sortedSections = [
        "Гнатология",                // s0
        "Детство",                   // s1
        "Консультация и диагностика", // s2
        "Отбеливание зубов",         // s3
        "Ортодонтия",                // s4
        "Ортопедия",                 // s5
        "Пародонтология",            // s6
        "Профессиональная гигиена",  // s7
        "Терапия",                   // s8
        "Хирургия и имплантация"     // s9
      ];

      // Массив изображений в соответствии с алфавитным порядком
      const sectionImages = [
        s0, // Гнатология
        s1, // Детство
        s2, // Консультация и диагностика
        s5, // Отбеливание зубов
        s3, // Ортодонтия
        s4, // Ортопедия
        s6, // Пародонтология
        s7, // Профессиональная гигиена
        s8, // Терапия
        s9  // Хирургия и имплантация
      ];

      // Функция для получения изображения
      const getSectionImage = (title) => {
        const index = sortedSections.indexOf(title);
        return index >= 0 ? sectionImages[index] : s0; // fallback
      };

    const styles = {
        brown: {
            color1: '#D6D0C2',
            color2: 'white',
            color3: '#2E2E2E',
            color4: "white",
            color5: "black"
        },
        blue: {
            color1: '#576D8D',
            color2: '#B5D2F4',
            color3 :'#B5D2F4',
            color4: 'black',
            color5: "white"
        },
      };

    const selectedStyle = styles[backgroundColor] || {};

    const isDesktop = useMediaQuery ({minWidth : 768});

    return (
        <>
            <div className="item-01 col-12 col-md-5 my-md-3"
            style={{ backgroundColor: selectedStyle.color2, }}>
                <div className="row gy-3 item">
                    <div className="special1 col-8 col-md-12">
                        <FadeInTextLeft>
                        <div className="d-flex d-md-none icons-mobile">
                            <img src={getSectionImage(title)} alt={title} />
                            <h3> {title} </h3>
                        </div>
                        <h3 className="d-none d-md-inline"> {title} </h3>
                        <p> {description} </p>
                        </FadeInTextLeft>
                    </div>
                    <div className="special2 col-3 col-md-12 ">
                        <Link style={{
                        '--color4': selectedStyle.color4,
                        '--color5': selectedStyle.color5
                        }} to={`/services${link}`}> Об отделении </Link>
                        <Link style={{
                            '--color4': selectedStyle.color4,
                            '--color5': selectedStyle.color5
                        }} to={`/services${link}#servicesprices`}> Все услуги </Link>
                    </div>
                </div>
            </div>
            <div className="item-02 col-12 col-md-7 my-md-3 row gx-3"
            style={{ backgroundColor: selectedStyle.color1, }}>
                {innerServices.map ((el,index) => {
                    return (
                        <div className="col-6 h-100 d-flex flex-column">
                            <div className="w-100 h-100 d-flex flex-column align-items-start">
                                <FadeInTextRight>

                                <h3> {el.title} </h3>
                                <p> {el.description} </p>
                                </FadeInTextRight>
                                {/* <Link to={`/${link}`}> Подробнее </Link> */}
                            </div>
                                {/* { index===1 ? <Link style={{ backgroundColor: selectedStyle.color3, color: selectedStyle.color4 }} to="/services" className="big-link w-100 text-center mt-4 d-flex justify-content-center align-items-center"> Все услуги </Link> : null} */}
                        </div>
                    )
                })}
            </div>
        </>
    )
}