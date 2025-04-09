
import { Link } from "react-router-dom";

export default function ServicesAndPrice () {

    const kidsServices =[
        {
            title: "Адаптационный прием (30 мин)",
            price: "1000 ₽",
        },
        {
            title: "Лечение под микроскопом",
            price: "от 7500 ₽",
        },
        {
            title: "Лечение кариеса молочного зуба",
            price: "от 3500 ₽",
        },
        {
            title: "Восстановление молочного зуба циркониевой коронкой",
            price: "от 4000 ₽",
        },
        {
            title: "Лечение под закисью азота",
            price: "от 2000 ₽",
        },
    ]

    return(
        <section className="container">
            <div className="kids-services">
                <h2> Услуги и стоимость </h2>

                <div className="kids-services__grid">
                    {kidsServices.map ((el,index)=> {
                        return (
                            <div key={index}>
                                <p>
                                    {el.title}
                                </p>
                                <div>
                                    {el.price}
                                </div>
                            </div>
                        )
                    })}
                    <div>
                        <p>
                        Полный прайс “Детская стоматология”
                        </p>
                        <Link>
                            Смотреть
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}