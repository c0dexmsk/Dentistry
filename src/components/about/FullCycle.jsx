import DefautCard from "./DefaultCard";
import fullCycle from "../../assets/FullCycle.png";
import lab from "../../assets/lab.svg";
import begomarket from "../../assets/begomarket.svg";
import academy from "../../assets/academy.svg";
import Button from "../general/Button";

export default function FullCycle () {

    return (
        <section className="full-cycle">
            <DefautCard
                title="Полный цикл"
                description1="Собственная зуботехническая лаборатория обеспечивает оперативное изготовление сложных ортопедических конструкций, Bego Маркет снабжает стоматологов
                    и зубных техников всем необходимым для работы,
                    а профессиональная Академия при клинике позволяет врачам постоянно повышать квалификацию, быть в курсе последних достижений в профессии и внедрять
                    их в собственную практику."
                description2="Поддержку бесперебойной работы этой слаженной системы осуществляет лицензированный Сервисный центр Bego."
                image={fullCycle}
                icon1={lab}
                icon2={begomarket}
                icon3={academy}
                icon1Title="Лаборатория"
                icon2Title="Бегомаркет"
                icon3Title="Академия"
            >
            <div className="full-cycle__button">
                <Button> Все услуги </Button>
            </div>
            </DefautCard>
        </section>
    )
}
