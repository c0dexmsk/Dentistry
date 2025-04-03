import "../../styles/about/Comfort.css"
import place from "../../assets/place.svg";
import child from "../../assets/child.svg";
import europe from "../../assets/europe.svg";
import smart from "../../assets/smart.svg";
import network from "../../assets/network.svg";


export default function Comfort () {

    return (
        <section>
            <div className="comfort">

                <div>
                    <img src={place} alt="Место" />
                    <h3>
                        Раширяем присутствие
                    </h3>
                    <p>
                        Наши клиники уже работают
                        в Махачкале, Москве
                        и Избербаше. Какой следующий город Bego?
                    </p>
                </div>

                <div>
                    <img src={child} alt="Дети" />
                    <h3>
                        Детям у нас нравится
                    </h3>
                    <p>
                        Лечение молочных зубов, процедуры во сне
                        и развлекательное пространство
                    </p>
                </div>

                <div>
                    <img src={europe} alt="Европейский стандарт" />
                    <h3>
                        Европейский стандарт
                    </h3>
                    <p>
                        В стерилизации инструментов и подборе препаратов - исключает
                        все риски
                    </p>
                </div>

                <div>
                    <img src={smart} alt="Умный мониторинг" />
                    <h3>
                        Умный мониторинг
                    </h3>
                    <p>
                        Проводим регулярные бесплатные осмотры детей
                        и взрослых для профилактики
                    </p>
                </div>

                <div>
                    <img src={network} alt="Сеть клиник, но не только" />
                    <h3>
                        Раширяем присутствие
                    </h3>
                    <p>
                        Экосистема, обеспечивающая бесперебойную работу всех подразделений клиники 
                    </p>
                </div>

            </div>
        </section>
    )
}