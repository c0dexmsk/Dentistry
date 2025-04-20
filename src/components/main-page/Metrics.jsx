
import numbers from "../../assets/nums-logo.svg";
import heart from "../../assets/heart-logo.svg";
import safety from "../../assets/safety.svg";
import openness from "../../assets/openness.svg";


export default function Metrics () {

    return (
        <>
            <section className="metrics container-fluid px-0">
                <div>
                    <div className="metrics__numbers">
                        <div className="d-flex flex-row align-items-center d-md-none secret">
                            <img src={numbers} alt="numbers logo" />
                            <h3> Цифры </h3>
                        </div>
                        <img className="d-none d-md-block" src={numbers} alt="numbers logo" />
                        <h3 className="d-none d-md-block"> Цифры </h3>
                        <p>
                        20 лет безупречной репутации и 20 тысяч улыбчивых пациентов
                        </p>
                    </div>

                    <div className="metrics__confession">
                    <div className="d-flex flex-row align-items-center d-md-none secret">
                        <img src={heart} alt="heart logo" />
                        <h3> Признание </h3>
                    </div>
                    <img className="d-none d-md-block" src={heart} alt="heart logo" />
                    <h3 className="d-none d-md-block"> Признание </h3>
                        <p>
                        Обладатели премии
                        Best Dental Awards
                        в номинации “Семейная стоматология года”
                        </p>
                    </div>

                    <div className="metrics__safety">
                    <div className="d-flex flex-row align-items-center d-md-none secret">
                        <img src={safety} alt="safety logo" />
                        <h3> Безопасность </h3>
                    </div>
                    <img className="d-none d-md-block" src={safety} alt="safety logo" />
                    <h3 className="d-none d-md-block"> Безопасность </h3>
                        <p>
                            Европейский стандарт стерилизации, соответствие всем ГОСТам, международный сертификат ISO-11
                        </p>
                    </div>

                    <div className="metrics__openness">
                    <div className="d-flex flex-row align-items-center d-md-none secret">
                        <img  src={openness} alt="openness logo" />
                        <h3 > Открытость </h3>
                    </div>
                    <img className="d-none d-md-block" src={openness} alt="openness logo" />
                    <h3 className="d-none d-md-block"> Открытость </h3>
                        <p>
                        Регулярно участвуем в международных профессиональных конференциях
                        и входим в Российскую Ассоциацию Стоматологов
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}