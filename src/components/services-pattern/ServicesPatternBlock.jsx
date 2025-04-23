import Accordion from 'react-bootstrap/Accordion';
import xray from "./images/rentgen-person.png";
import icon from "./images/block-icon.svg"
import { Link } from "react-router-dom";
import test1 from "assets/test-1.png"
import test2 from "assets/test-2.png"
import { useState } from 'react';
import MobileTitle from 'components/about/MobileTitle';
import { useMediaQuery } from 'react-responsive';

export default function ServicesPatternBlock ({content}) {

    const isDesktop = useMediaQuery ({minWidth: 768});
    const [hideText, setHideText] = useState(true);
    const [hideText2, setHideText2] = useState(true);

    const [showAll, setShowAll] = useState(false);
    const shouldShowButton = content.services.length > 6;   
    const visibleServices = showAll 
        ? content.services 
        : content.services.slice(0, 6);

    return (
        <section className="container-fluid px-0">
            <div className="pattern-block">
                <h1 className='d-block d-md-none text-center mt-0 mb-3'> {content.title_H1} </h1>
                <div className="container row justify-content-center align-items-center">
                    <div className="col-4 col-md-1">
                        <img className="pattern-block__image" src={content.guideImage} alt="Фотография врача" />
                    </div>
                    <div className="pattern-block__guide col">
                        <p> Экскурсию по отделению проводит </p>
                        <h3> {content.guideName} </h3>
                        <p> {content.specialization} стоматолог </p>
                    </div>
                </div>

                <div className="row pattern-block__text mt-md-5 mt-3">
                    <div className="col-md-5 col-12 d-block d-md-none mb-3 mb-md-0">
                        <img src={content.ICON5} alt="фотография" />
                    </div>

                    <div className="col-md-7 col-12">
                        <h1 className='d-none d-md-block'> {content.title_H1} </h1>
                        <p> {content.description_H1} </p>
                    </div>

                    <div className="col-5 d-none d-md-block">
                        <img src={content.ICON5} alt="фотография" />
                    </div>
                </div>

                <div className="row pattern-block__buttons mt-md-5 mt-2 g-3">
                    <div className="col-md-3 col-6">
                        <button> ОПИСАНИЕ УСЛУГИ </button>
                    </div>
                    <div className="col-md-3 col-6">
                        <button> ИЗ ЧЕГО СОСТОИТ </button>
                    </div>
                    <div className="col-md-3 col-6">
                        <button> ЦЕНЫ </button>
                    </div>
                    <div  className="col-md-3 col-6">
                        <button> ВОПРОС/ОТВЕТ</button>
                    </div>
                </div>

                <div className="row align-items-center pattern-block__text block2 margin100">
                <h2 className='d-block d-md-none mb-3'> {content.title_H2} </h2>
                    <div className="col-md-5 col-12 px-0">
                        <img src={content.image} alt="фотография" />
                    </div>
                    <div className="col-md-7 col-12 pr-0 pl-auto pl-md-5">
                        <h2 className='d-none d-md-block'> {content.title_H2} </h2>
                        <p className='mt-3 mt-md-0'> {content.description1_H2} </p>
                        <button className="mb-3 d-block d-md-none" onClick={() => (setHideText(!hideText))}> {hideText? ("Показать весь текст"): ("Скрыть текст") } </button>
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
                        <button className="mb-3 d-block d-md-none" onClick={() => (setHideText2(!hideText2))}> {hideText2? ("Показать весь текст"): ("Скрыть текст") } </button>
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
                    <h2> {content.ability_H2} </h2>
                    <div className="row mt-md-5 mt-3 g-4">

                        <div className="col-md-12 col-6 col-lg-6 pl-0">
                            <div className="p-md-3 p-0">
                                <div className="row align-items-center g-4 mb-3 ">
                                    <div className="col-md-2 col-4">
                                        <img src={content.ICON1} alt="иконка" />
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
                                        <img src={content.ICON2} alt="иконка" />
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
                                        <img src={content.ICON3} alt="иконка" />
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
                                        <img src={content.ICON4} alt="иконка" />
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
                        <h2 className="col-md-8 col-7"> Услуги и стоимость </h2>
                        <div className='col-md col-4 d-flex justify-content-end'>
                            <Link to="/full-price" className=" customLink"> Полный прайс </Link>
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
                        <div className="col-4 d-none all-price-el">
                            <div>
                                <Link to="/full-price"> Полный прайс </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="margin100 pattern-block__questions">
                    <h2>Ваши вопросы</h2>
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