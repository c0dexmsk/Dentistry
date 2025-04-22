import withBitrixPriceBlockData from 'hocs/withBitrixPriceBlockData';
import Accordion from 'react-bootstrap/Accordion';
import clock from "../../assets/price/clock.svg";
import calendar from "../../assets/price/calendar.svg"

function PriceBlock ({bitrixData}) {

    console.log('Получаемые данные: ',bitrixData);
    const departments = bitrixData;
    const uniqueDepartments = Array.from(new Set(bitrixData.map(el=> el.department)));

    const groupedByDepartment = uniqueDepartments.reduce((acc, department) => {
        acc[department] = departments.filter(el => el.department === department);

        return acc;
    }, {});

    const departmentTitles = {
        consultation: "Консультация и диагностика",
        prevention: "Профилактика",
        therapy: "Терапия",
        orthopedics: "Ортопедия",
        orthodontics: "Ортодонтия",

        periodontology: "Пародонтология",
        implantation: "Имплантация",
        surgery: "Хирургия",
        gnathology: "Гнатология",
        pediatricDentistry: "Детская стоматология"

    };

    console.log(groupedByDepartment);

    return (
        <section>
            <div className='price-block'>
                <h1 className='text-center margin-bottom-100'> Прайс </h1>
                <Accordion>
                {uniqueDepartments.map((department, index) => (
                        <Accordion.Item key={index} eventKey={String(index)}>
                            <Accordion.Header>
                                {departmentTitles[department] || department}
                            </Accordion.Header>
                            <Accordion.Body>
                                {groupedByDepartment[department].map((service, serviceIndex) => (
                                    <div key={serviceIndex} className='d-flex flex-column mb-5'>
                                        <div className='item-title row flex-nowrap align-items-center'>
                                            <h3 className='col-auto'> {service.name}</h3>
                                            <div className='col'> </div>
                                            <p className='col-auto'> {service.price} </p>
                                        </div>

                                        <div className='item-body row'>
                                            <div className="col-8">
                                                <p>
                                                {service.description}
                                                </p>
                                            </div>
                                            <div className="col-4 d-flex flex-column mt-3">
                                                <div className='d-flex flex-row'>
                                                    <img className="mr-3" src={clock} alt="Часы" />
                                                    <p> {service.time} </p>
                                                </div>
                                                { service.count &&
                                                <div className='d-flex flex-row'>
                                                    <img className="mr-3" src={calendar} alt="Календарь" />
                                                    <p> {service.count} </p>
                                                </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}

                </Accordion>
                <a className='button' href="/full-price"> Полный прайс-лист </a>
            </div>
        </section>
    )
}

export default withBitrixPriceBlockData(PriceBlock)