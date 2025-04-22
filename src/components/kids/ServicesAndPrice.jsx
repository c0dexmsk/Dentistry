
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function ServicesAndPrice () {

    const isDesktop = useMediaQuery ({minWidth: 768})

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
    const kidsServices2 =[
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
    ]

    return(
        <section className="container-fluid px-0">
            <div className="kids-services">
                <div className="new-button">
                <h2> Услуги и стоимость </h2>
                <a className="button" href="/full-price">Полный прайс-лист</a>
                </div>

                <div className="kids-services__grid">
                    { (isDesktop ? kidsServices : kidsServices2).map ((el,index)=> {
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
                    <div className="d-none d-md-flex">
                        <p>
                        Полный прайс
                        </p>
                        <Link to="/full-price">
                            Смотреть
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}