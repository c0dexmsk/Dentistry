import withBitrixPriceListData from "hocs/withBitrixPriceListData";

function PriceList ({bitrixData}) {

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
        pediatricDentistry: "Детская стоматология",
        teeth_whitening: "Отбеливание зубов",

    };

    return (
        <section>
            <div className='price-list'>
                <h1 className='text-center margin-bottom-100'> Прайс </h1>

                <div className="price-list__departments">
                    <h2> Отделения клиники </h2>
                    <div className="row mb-md-4">
                        <button className="col"> Консультация и диагностика </button>
                        <button className="col-auto"> Профилактика </button>
                        <button className="col"> Терапия </button>
                        <button className="col"> Ортопедия </button>
                        <button className="col"> Ортодонтия </button>
                    </div>

                    <div className="row mb-md-4">
                        <button className="col"> Хирургия </button>
                        <button className="col-auto"> Имплантация </button>
                        <button className="col"> Пародонтология </button>
                        <button className="col"> Гнатология </button>
                        <button className="col"> Детская стоматология </button>
                    </div>
                </div>

                {uniqueDepartments.map((department, index) => (
                    <div key={index} className="price-list__sections margin-top-100">

                        <h2>{departmentTitles[department] || department} </h2>

                        {groupedByDepartment[department].map((service, serviceIndex) => (

                            <div>
                                <div className="row price-mobile">
                                    <div className="col-7">
                                        <p>
                                        {service.name}
                                        </p>
                                    </div>
                                    <div className="col-5">
                                        <p className="bold">
                                        {service.price}
                                        </p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </section>
)}
export default withBitrixPriceListData(PriceList)