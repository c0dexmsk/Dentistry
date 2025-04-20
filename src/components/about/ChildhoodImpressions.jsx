import DefautCard from "./DefaultCard";
import childhoodImpressions from "../../assets/ChildhoodImpressions.png";
import childhoodImpressions2 from "../../assets/child-2.svg";
import play from "../../assets/play.svg";
import antistress from "../../assets/anti-stress.svg";
import sleep from "../../assets/sleep.svg";
import Button from "../general/Button";
import { useMediaQuery } from "react-responsive";

export default function ChildhoodImpressions () {

    const isDesktop = useMediaQuery ({minWidth: 768})

    return (
        <section className="child">
            <DefautCard
                title="Детские впечатления"
                description1="Особый протокол антистресс-лечения — соблюдается от и до, гарантируя безопасность и качество. Признанный препарат Севоран позволяет комфортно пройти сложные процедуры во сне. Наркозно-дыхательный аппарат Drager, применяемый в ведущих клиниках мира, обеспечивает беспрерывный мониторинг состояния ребенка в реальном времени."
                description2="Мы проводим бесплатные профилактические осмотры каждые 3-4 месяца, чтобы сохранить здоровье молочных зубов и гарантировать правильное формирование постоянных. После каждого приема ребенка ждет приятный подарок."
                image={isDesktop ? childhoodImpressions : childhoodImpressions2}
                icon1={play}
                icon2={antistress}
                icon3={sleep}
                icon1Title="Игра"
                icon2Title="Антистресс"
                icon3Title="Сон"
            >
                <div className="child__button">
                    <Button> Все услуги </Button>
                </div>
            </DefautCard>
        </section>
    )
}
