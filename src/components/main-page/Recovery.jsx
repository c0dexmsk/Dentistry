
import { Link } from "react-router-dom";
import smile from "../../assets/smile.svg"

export default function Recovery() {

    return (
        <>
            <section className="recovery container-fluid">
                <img src={smile} alt="Улыбка" />
                <div className="recovery__content">
                    <div>
                        <h2>
                            Цифровой протокол: 3D-восстановление
                        </h2>
                        <p>
                            Кейс Зайнап демонстрирует возможности цифровой стоматологии: от диагностики с помощью 3D-томографии и сканирования Primescan до микрохирургии и высокоточной реставрации с индивидуальным подбором оттенка. Точность и предсказуемость на каждом этапе лечения.
                        </p>
                        <Link to="/">
                            <button>
                                Подробнее
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}