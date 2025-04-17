import withBitrixPriceBlockData from 'hocs/withBitrixPriceBlockData';
import Accordion from 'react-bootstrap/Accordion';
import clock from "../../assets/price/clock.svg";
import calendar from "../../assets/price/calendar.svg"
import PriceBlockItem from './PriceBlockItem';

function PriceBlock ({bitrixData}) {

    console.log('Получаемые данные: ',bitrixData);
    const departments = bitrixData.map(el=> el.departmentCode);
    console.log(departments);
    
    
    return (
        <section>
            <div className='price-block'>
                <h1 className='text-center margin-bottom-100'> Прайс </h1>
                {bitrixData.map( (el, index )=> {})}
                <PriceBlockItem


                />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Консультация и диагностика</Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex flex-column mb-5'>
                                <div className='item-title row flex-nowrap align-items-center'>
                                    <h3 className='col-auto'> Компьютерная томография </h3>
                                    <div className='col'> </div>
                                    <p className='col-auto'> от 4 500 ₽ </p>
                                </div>

                                <div className='item-body row'>
                                    <div className="col-8">
                                        <p>
                                        Возможность получить детальные трехмерные изображения зубов, челюстей и окружающих тканей. Он применяется для диагностики заболеваний зубов, оценки состояния имплантов, планирования ортодонтического лечения
                                        </p>
                                    </div>
                                    <div className="col-4 d-flex flex-column mt-3">
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={clock} alt="Часы" />
                                            <p> 5-15 минут</p>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={calendar} alt="Календарь" />
                                            <p> 1 Прием </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex flex-column mb-5'>
                                <div className='item-title row flex-nowrap align-items-center'>
                                    <h3 className='col-auto'> Консультация</h3>
                                    <div className='col'> </div>
                                    <p className='col-auto'> 1000 ₽ </p>
                                </div>

                                <div className='item-body row'>
                                    <div className="col-8">
                                        <p>
                                        Это первичный визит, на котором врач оценивает состояние полости рта пациента, выявляет проблемы и предлагает варианты диагностики и лечения.
                                        </p>
                                    </div>
                                    <div className="col-4 d-flex flex-column mt-3">
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={clock} alt="Часы" />
                                            <p> 30 минут</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex flex-column mb-5'>
                                <div className='item-title row flex-nowrap align-items-center'>
                                    <h3 className='col-auto'> Компьютерная томография </h3>
                                    <div className='col'> </div>
                                    <p className='col-auto'> от 4 500 ₽ </p>
                                </div>

                                <div className='item-body row '>
                                    <div className="col-8">
                                        <p>
                                        Возможность получить детальные трехмерные изображения зубов, челюстей и окружающих тканей. Он применяется для диагностики заболеваний зубов, оценки состояния имплантов, планирования ортодонтического лечения
                                        </p>
                                    </div>
                                    <div className="col-4 d-flex flex-column mt-3">
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={clock} alt="Часы" />
                                            <p> 30 минут</p>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={calendar} alt="Календарь" />
                                            <p> 1 раз в 6 месяцев </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Профилактика</Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex flex-column mb-5'>
                                <div className='item-title row flex-nowrap align-items-center'>
                                    <h3 className='col-auto'> Компьютерная томография </h3>
                                    <div className='col'> </div>
                                    <p className='col-auto'> от 4 500 ₽ </p>
                                </div>

                                <div className='item-body row'>
                                    <div className="col-8">
                                        <p>
                                        Возможность получить детальные трехмерные изображения зубов, челюстей и окружающих тканей. Он применяется для диагностики заболеваний зубов, оценки состояния имплантов, планирования ортодонтического лечения
                                        </p>
                                    </div>
                                    <div className="col-4 d-flex flex-column mt-3">
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={clock} alt="Часы" />
                                            <p> 5-15 минут</p>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={calendar} alt="Календарь" />
                                            <p> 1 Прием </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex flex-column mb-5'>
                                <div className='item-title row flex-nowrap align-items-center'>
                                    <h3 className='col-auto'> Консультация</h3>
                                    <div className='col'> </div>
                                    <p className='col-auto'> 1000 ₽ </p>
                                </div>

                                <div className='item-body row'>
                                    <div className="col-8">
                                        <p>
                                        Это первичный визит, на котором врач оценивает состояние полости рта пациента, выявляет проблемы и предлагает варианты диагностики и лечения.
                                        </p>
                                    </div>
                                    <div className="col-4 d-flex flex-column mt-3">
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={clock} alt="Часы" />
                                            <p> 30 минут</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex flex-column mb-5'>
                                <div className='item-title row flex-nowrap align-items-center'>
                                    <h3 className='col-auto'> Компьютерная томография </h3>
                                    <div className='col'> </div>
                                    <p className='col-auto'> от 4 500 ₽ </p>
                                </div>

                                <div className='item-body row '>
                                    <div className="col-8">
                                        <p>
                                        Возможность получить детальные трехмерные изображения зубов, челюстей и окружающих тканей. Он применяется для диагностики заболеваний зубов, оценки состояния имплантов, планирования ортодонтического лечения
                                        </p>
                                    </div>
                                    <div className="col-4 d-flex flex-column mt-3">
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={clock} alt="Часы" />
                                            <p> 30 минут</p>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={calendar} alt="Календарь" />
                                            <p> 1 раз в 6 месяцев </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Терапия</Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex flex-column mb-5'>
                                <div className='item-title row flex-nowrap align-items-center'>
                                    <h3 className='col-auto'> Компьютерная томография </h3>
                                    <div className='col'> </div>
                                    <p className='col-auto'> от 4 500 ₽ </p>
                                </div>

                                <div className='item-body row'>
                                    <div className="col-8">
                                        <p>
                                        Возможность получить детальные трехмерные изображения зубов, челюстей и окружающих тканей. Он применяется для диагностики заболеваний зубов, оценки состояния имплантов, планирования ортодонтического лечения
                                        </p>
                                    </div>
                                    <div className="col-4 d-flex flex-column mt-3">
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={clock} alt="Часы" />
                                            <p> 5-15 минут</p>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={calendar} alt="Календарь" />
                                            <p> 1 Прием </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex flex-column mb-5'>
                                <div className='item-title row flex-nowrap align-items-center'>
                                    <h3 className='col-auto'> Консультация</h3>
                                    <div className='col'> </div>
                                    <p className='col-auto'> 1000 ₽ </p>
                                </div>

                                <div className='item-body row'>
                                    <div className="col-8">
                                        <p>
                                        Это первичный визит, на котором врач оценивает состояние полости рта пациента, выявляет проблемы и предлагает варианты диагностики и лечения.
                                        </p>
                                    </div>
                                    <div className="col-4 d-flex flex-column mt-3">
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={clock} alt="Часы" />
                                            <p> 30 минут</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex flex-column mb-5'>
                                <div className='item-title row flex-nowrap align-items-center'>
                                    <h3 className='col-auto'> Компьютерная томография </h3>
                                    <div className='col'> </div>
                                    <p className='col-auto'> от 4 500 ₽ </p>
                                </div>

                                <div className='item-body row '>
                                    <div className="col-8">
                                        <p>
                                        Возможность получить детальные трехмерные изображения зубов, челюстей и окружающих тканей. Он применяется для диагностики заболеваний зубов, оценки состояния имплантов, планирования ортодонтического лечения
                                        </p>
                                    </div>
                                    <div className="col-4 d-flex flex-column mt-3">
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={clock} alt="Часы" />
                                            <p> 30 минут</p>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <img className="mr-3" src={calendar} alt="Календарь" />
                                            <p> 1 раз в 6 месяцев </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </section>
    )
}

export default withBitrixPriceBlockData(PriceBlock)