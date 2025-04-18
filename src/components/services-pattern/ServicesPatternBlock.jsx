import Accordion from 'react-bootstrap/Accordion';
import xray from "./images/rentgen-person.png";
import icon from "./images/block-icon.svg"
import { Link } from "react-router-dom";

import withBitrixServiceData from '../../hocs/withBitrixServiceData';

function ServicesPatternBlock ({bitrixData}) {

    return (
        <section className="container-fluid px-0">
            <div className="pattern-block">

                <div className="container row justify-bitrixData-center align-items-center">
                    <div className="col-1">
                        <img className="pattern-block__image" src={icon} alt="Фотография врача" />
                    </div>
                    <div className="pattern-block__guide col">
                        <p> Экскурсию по отделению проводит </p>
                        <h3> {bitrixData.guideName} </h3>
                    </div>
                </div>

                <div className="row pattern-block__text mt-5">
                    <div className="col-7">
                        <h1> {bitrixData.title_H1} </h1>
                        <p> {bitrixData.description_H1} </p>
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
                    <div className="col-5 px-0">
                        <img src={bitrixData.image} alt="фотография" />
                    </div>
                    <div className="col-7 pr-0">
                        <h2> {bitrixData.title_H2} </h2>
                        <p> {bitrixData.description1_H2} </p>
                        <p> {bitrixData.description2_H2} </p>
                    </div>
                </div>

                <div className="margin100">
                    <h2> Важно знать </h2>
                    <div className="row mt-4 g-4">
                        <div className="col-md-12 col-lg-6 pl-0">
                            <p>
                                {bitrixData.important_1}
                            </p>
                        </div>
                        <div className="col-md-12 col-lg-6 pr-0">
                            <p>
                                {bitrixData.important_2}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="margin100 abilities">
                    <h2> {bitrixData.ability_H2} </h2>
                    <div className="row mt-5 g-4">

                        <div className="col-md-12 col-lg-6 pl-0">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3 ">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {bitrixData.abilityBlocks[0].title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {bitrixData.abilityBlocks[0].description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6 pr-0">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {bitrixData.abilityBlocks[1].title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {bitrixData.abilityBlocks[1].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 pl-0">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {bitrixData.abilityBlocks[2].title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {bitrixData.abilityBlocks[2].description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6 pr-0">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {bitrixData.abilityBlocks[3].title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {bitrixData.abilityBlocks[3].description}
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="margin100 pattern-block__services">

                    <div className="row align-items-center justify-bitrixData-between">
                        <h2 className="col-8"> Услуги и стоимость </h2>
                        <Link to="/price" className="col text-end"> Прайс на все услуги </Link>
                    </div>

                    <div className="row g-3 mt-4 align-items-center">
                        {bitrixData.services.map((el,index) => {
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
                                <Accordion.Header>{bitrixData.questions[0].question}</Accordion.Header>
                                <Accordion.Body>
                                    {bitrixData.questions[0].answer}
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                            <Accordion.Header>{bitrixData.questions[1].question}</Accordion.Header>
                                <Accordion.Body>
                                    {bitrixData.questions[1].answer}
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                            <Accordion.Header>{bitrixData.questions[2].question}</Accordion.Header>
                                <Accordion.Body>
                                    {bitrixData.questions[2].answer}
                                </Accordion.Body>
                            </Accordion.Item>

                            </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withBitrixServiceData(ServicesPatternBlock);