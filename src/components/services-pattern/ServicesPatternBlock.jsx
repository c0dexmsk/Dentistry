import Accordion from 'react-bootstrap/Accordion';
import xray from "./images/rentgen-person.png";
import icon from "./images/block-icon.svg"
import { Link } from "react-router-dom";
import test1 from "assets/test-3.png"
import test2 from "assets/test-2.png"
import { useState } from 'react';
import MobileTitle from 'components/about/MobileTitle';
import { FadeInTextLeft , FadeInTextRight } from "components/FadeInText";
import { HashLink as Link1 } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import gnatol from "assets/services/R (1).png";
import child from "assets/services/R (10).png";
import diagnost from "assets/services/R (2).png";
import ortodont from "assets/services/R (3).png";
import ortoped from "assets/services/R (4).png";
import otbelTooth from "assets/services/R (7).png";
import parodont from "assets/services/R (8).png";
import profGigiena from "assets/services/R (9).png";
import terapevt from "assets/services/R (5).png";
import sugery from "assets/services/R (6).png";

/* Гнатология 94
Детская стоматология 93
Диагностика 92
Ортодонтия 73
Ортопедия 68
Отбеливание зубов 57 П
ародонтия 55
Профессиональная гигиена 47
Терапевтическая стоматология 12
Хирургия и имплантация 51 */

const TextWithSplit = ({ text, maxLength = 250, splitAt = 190 }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [showFullText, setShowFullText] = useState(false);

    if (!text) return null;

    const trimmedText = text.trim();
    const isLongText = trimmedText.length > maxLength;

    if (!isLongText) {
        return <p>{trimmedText}</p>;
    }

    const findLastSentenceEnd = (str, beforeIndex) => {
        const sentenceEndRegex = /[.!?](?=\s+[А-ЯA-Z]|$)/g;
        let lastEndIndex = 0;
        let match;

        while ((match = sentenceEndRegex.exec(str)) !== null) {

            if (match.index <= beforeIndex) {
                lastEndIndex = match.index + 1;
            } else {
                break;
            }
        }

        if (lastEndIndex > 0) {
            return lastEndIndex;
        }

        const lastSpace = str.lastIndexOf(' ', beforeIndex);
        return lastSpace > 0 ? lastSpace : beforeIndex;
    };

    const splitIndex = findLastSentenceEnd(trimmedText, splitAt);
    const firstPart = trimmedText.slice(0, splitIndex).trim();
    const secondPart = trimmedText.slice(splitIndex).trim();

    if (!isMobile) {
        return (
            <>
                <p>{firstPart}</p>
                {secondPart && <p style={{ marginTop: "1em" }}>{secondPart}</p>}
            </>
        );
    }

    return (
        <div>
            <p>{firstPart}</p>
            {showFullText && secondPart && (
                <p style={{ marginTop: "1em" }}>{secondPart}</p>
            )}
            {secondPart && (
                <button
                    onClick={() => setShowFullText(!showFullText)}
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        marginTop: '0.5em',
                        cursor: 'pointer'
                    }}
                >
                    {showFullText ? 'Скрыть' : 'Показать весь текст'}
                </button>
            )}
        </div>
    );
  };

export default function ServicesPatternBlock ({content}) {

    const isDesktop = useMediaQuery ({minWidth: 768});
    const [hideText, setHideText] = useState(true);
    const [hideText2, setHideText2] = useState(true);

    const [showAll, setShowAll] = useState(false);
    const shouldShowButton = content.services.length > 6;
    const visibleServices = showAll
        ? content.services
        : content.services.slice(0, 6);

    const { id } = useParams();
    const serviceCode = id ? parseInt(id) : null;

    console.log('Полученный код из URL:', id);
    console.log('Преобразованный код:', serviceCode);

    const serviceImages = {
        94: gnatol,
        93: child,
        92: diagnost,
        73: ortodont,
        68: ortoped,
        57: otbelTooth,
        55: parodont,
        47: profGigiena,
        12: terapevt,
        51: sugery
    };

    const getServiceImage = (code) => {
        if (!code) {
            console.warn('Код услуги не получен');
            return gnatol; // Возвращаем изображение по умолчанию
        }
        return serviceImages[code] || gnatol;
    };

    return (
        <section className="container-fluid px-0">
            <div className="pattern-block">
                <div className='d-md-none d-flex align-items-center justify-content-center iconService'>
                    <img src={getServiceImage(serviceCode)} alt="service" />
                </div>
                <h1 className='d-block d-md-none text-center mt-0 mb-3'> {content.title_H1} </h1>
                <div className="container row justify-content-center align-items-center flex-nowrap">
                    <div className="col-4 col-md-1">
                        <img className="pattern-block__image" src={content.guideImage} alt="Фотография врача" />
                    </div>
                    <div className="pattern-block__guide col">
                        <p> Экскурсию по отделению проводит </p>
                        <h3> {content.guideName} </h3>
                        <p> {content.specialization}</p>
                    </div>
                </div>

                <div className="row pattern-block__text mt-md-5 mt-3">
                    <div className="col-md-5 col-12 d-block d-md-none mb-3 mb-md-0">
                        <img src={content.ICON5} alt="фотография 1" />
                    </div>

                    <div className="col-md-7 col-12">
                        <h1 className='d-none d-md-block'> {content.title_H1} </h1>
                        <TextWithSplit text={content.description_H1} />
                    </div>

                    <div className="col-5 d-none d-md-block">
                        <img src={content.ICON5} alt="фотография 2" />
                    </div>
                </div>

                <div className="row pattern-block__buttons mt-md-5 mt-2 g-3">
                    <div className="col-md-3 col-6 d-flex align-center justify-content-center">
                        <Link1 smooth to="#section1"> ОПИСАНИЕ УСЛУГИ </Link1>
                    </div>
                    <div className="col-md-3 col-6 d-flex align-center justify-content-center">
                        <Link1 smooth to="#section2"> ИЗ ЧЕГО СОСТОИТ </Link1>
                    </div>
                    <div className="col-md-3 col-6 d-flex align-center justify-content-center">
                        <Link1 smooth to="#section3"> ЦЕНЫ </Link1>
                    </div>
                    <div  className="col-md-3 col-6 d-flex align-center justify-content-center">
                        <Link1 smooth to="#section4"> ВОПРОС/ОТВЕТ</Link1>
                    </div>
                </div>

                <div className="row align-items-center pattern-block__text block2 margin100">
                <h2 className='d-block d-md-none mb-3'> {content.title_H2} </h2>
                    <div className="col-md-5 col-12 px-0">
                        <img src=
                        {content.mainImage}
                        alt="фотография 3" />
                    </div>
                    <div className="col-md-6 col-12 pr-0 pl-auto pl-md-0 blockH2">
                        <h2 id='section1' className='d-none d-md-block'> {content.title_H2} </h2>
                        <p className='mt-3 mt-md-0'> {content.description1_H2} </p>
                        <button className="mb-3 d-block d-md-none" style={{textAlign: "left", fontWeight: "300"}} onClick={() => (setHideText(!hideText))}> {hideText? ("Показать весь текст"): ("Скрыть текст") } </button>
                        {hideText ? (
                            null
                        ) : (
                            <p > {content.description2_H2} </p>
                        )}
                         <p className='d-none d-md-block'> {content.description2_H2} </p>
                    </div>
                </div>

                <div className="margin100 imp">
                    <h2> Важно знать </h2>
                    <div className="row mt-md-4 mt-2 g-4">
                        <div className="col-md-12 col-lg-6 pl-0">
                            <p>
                                {content.important_1}
                            </p>
                        </div>
                        <button className="mb-3 d-block d-md-none" style={{textAlign: "left", fontWeight: "300"}} onClick={() => (setHideText2(!hideText2))}> {hideText2? ("Показать весь текст"): ("Скрыть текст") } </button>
                            {hideText2 ? (
                                null
                            ) : (
                                <p className='d-block d-md-none'> {content.description2_H2} </p>
                            )}
                        <div className="d-none d-md-block col-md-12 col-lg-6 pr-0">
                            <p className=''>
                                {content.important_2}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="margin100 abilities">
                    <h2 id='section2'> {content.ability_H2} </h2>
                    <div className="row mt-md-5 mt-3 g-4">

                        <div className="col-md-12 col-6 col-lg-6 pl-0">
                            <div className="p-md-3 p-0">
                                <div className="row align-items-center g-4 mb-3 ">
                                    <div className="col-md-2 col-4">
                                        <FadeInTextLeft>
                                            <img src={content.ICON1} alt="иконка" />
                                        </FadeInTextLeft>
                                    </div>
                                    <div className="col-md-10 col-8">
                                        <h3> {content.abilityBlocks[0].title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.abilityBlocks[0].description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-6 col-lg-6 pr-0">
                            <div className="p-md-3 p-0">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-md-2 col-4">
                                        <FadeInTextRight>
                                            <img src={content.ICON2} alt="иконка" />

                                        </FadeInTextRight>
                                    </div>
                                    <div className="col-md-10 col-8">
                                        <h3> {content.abilityBlocks[1].title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.abilityBlocks[1].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-6 col-lg-6 pl-0">
                            <div className="p-md-3 p-0">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-md-2 col-4">
                                        <FadeInTextLeft>
                                            <img src={content.ICON3} alt="иконка" />
                                        </FadeInTextLeft>
                                    </div>
                                    <div className="col-md-10 col-8">
                                        <h3> {content.abilityBlocks[2].title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.abilityBlocks[2].description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-6 col-lg-6 pr-0">
                            <div className="p-md-3 p-0">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-md-2 col-4">
                                        <FadeInTextRight>
                                            <img src={content.ICON4} alt="иконка" />
                                
                                        </FadeInTextRight>
                                    </div>
                                    <div className="col-md-10 col-8">
                                        <h3> {content.abilityBlocks[3].title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.abilityBlocks[3].description}
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="margin100 pattern-block__services">

                    <div className="row align-items-center justify-content-between">
                        <h2 id="servicesprices" className="col-md-8 col-7 "> Услуги и стоимость </h2>
                        <div className='col-md col-4 d-flex justify-content-end'>
                            <Link to="/full-price" id='section3' className=" customLink"> Полный прайс </Link>
                        </div>
                    </div>

                    <div className="row g-3 mt-md-4 mt-3 align-items-center">
                    {visibleServices.map((el, index) => (
                        <div className="col-md-4 col-6 element" key={index}>
                            <div>
                            <h3>{el.name}</h3>
                            <div>
                                <h3>{el.price}</h3>
                            </div>
                            </div>
                        </div>
                        ))}
                    {shouldShowButton && (
                        <div className="text-center mt-4">
                        <button
                            className="custom_button"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? 'Свернуть' : 'Развернуть все услуги'}
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transition-transform ${showAll ? 'rotate-180' : ''}`}
                                style={{ transition: 'transform 0.3s ease' }}
                            >
                                <path d="M6 9L2 5L3 4L6 7L9 4L10 5L6 9Z" fill="currentColor"/>
                            </svg>
                        </button>
                        </div>
                    )}
                        <div id='section3' className="col-4 d-none all-price-el" >
                            <div>
                                <Link to="/full-price"> Полный прайс </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="margin100 pattern-block__questions">
                    <h2 id='section4'>Ваши вопросы</h2>
                    <div className="pattern-block__questions__accordeon mt-md-5 mt-3">
                        <Accordion defaultActiveKey={isDesktop ? ["0", "1", "2"] : []} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{content.questions[0].question}</Accordion.Header>
                                <Accordion.Body>
                                    {content.questions[0].answer}
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                            <Accordion.Header>{content.questions[1].question}</Accordion.Header>
                                <Accordion.Body>
                                    {content.questions[1].answer}
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                            <Accordion.Header>{content.questions[2].question}</Accordion.Header>
                                <Accordion.Body>
                                    {content.questions[2].answer}
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}