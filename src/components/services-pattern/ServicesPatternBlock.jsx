import Accordion from 'react-bootstrap/Accordion';
import xray from "./images/rentgen-person.png";
import icon from "./images/block-icon.svg"
import { Link } from "react-router-dom";

export default function ServicesPatternBlock ({content}) {

    return (
        <section className="container-fluid">
            <div className="pattern-block">

                <div className="container row justify-content-center align-items-center">
                    <div className="col-1">
                        <img className="pattern-block__image" src={content.guideImage} alt="Фотография врача" />
                    </div>
                    <div className="pattern-block__guide col">
                        <p> Экскурсию по отделению проводит </p>
                        <h3> {content.guideName} </h3>
                    </div>
                </div>

                <div className="row pattern-block__text mt-5">
                    <div className="col-7">
                        <h1> {content.title_H1} </h1>
                        <p> {content.description_H1} </p>
                    </div>
                    <div className="col-5">
                        <img src={xray} alt="фотография" />
                    </div>
                </div>

                <div className="row pattern-block__buttons mt-5 g-3">
                    <div className="col-md-6 col-lg-3">
                        <button> ОПИСАНИЕ УСЛУГИ </button>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <button> ИЗ ЧЕГО СОСТОИТ </button>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <button> ЦЕНЫ </button>
                    </div>
                    <div  className="col-md-6 col-lg-3">
                        <button> ВОПРОС/ОТВЕТ</button>
                    </div>
                </div>

                <div className="row align-items-center pattern-block__text block2 margin100">
                    <div className="col-5">
                        <img src={content.image} alt="фотография" />
                    </div>
                    <div className="col-7 ">
                        <h2> {content.title_H2} </h2>
                        <p> {content.description1_H2} </p>
                        <p> {content.description2_H2} </p>
                    </div>
                </div>

                <div className="margin100">
                    <h2> Важно знать </h2>
                    <div className="row mt-4 g-4">
                        <div className="col-md-12 col-lg-6">
                            <p>
                                {content.important_1}
                            </p>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <p>
                                {content.important_2}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="margin100 abilities">
                    <h2> {content.ability_H2} </h2>
                    <div className="row mt-5 g-4">

                        <div className="col-md-12 col-lg-6">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {content.ability_block1.title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.ability_block1.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {content.ability_block2.title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.ability_block2.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {content.ability_block3.title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.ability_block3.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {content.ability_block4.title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.ability_block4.description}
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="margin100 pattern-block__services">

                    <div className="row align-items-center justify-content-between">
                        <h2 className="col-8"> Услуги и стоимость </h2>
                        <Link to="/price" className="col text-end"> Прайс на все услуги </Link>
                    </div>

                    <div className="row g-3 mt-4 align-items-center">
                        {content.services.map((el,index) => {
                            return (
                                <div className="col-4 element" key={index}>
                                    <div>
                                        <h3> {el.name} </h3>
                                        <div>
                                            <h3> {el.price} </h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        <div className="col-4 all-price-el">
                            <div>
                                <Link to="/price"> Полный прайс </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="margin100 pattern-block__questions">
                    <h2>Ваши вопросы</h2>
                    <div className="pattern-block__questions__accordeon mt-5">
                        <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
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