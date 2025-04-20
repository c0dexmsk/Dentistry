
import { Link } from "react-router-dom";
import smile from "../../assets/smile.svg"
import smile2 from "../../assets/smile2.svg"
import withBitrixData from '../../hocs/withBitrixData';
import { useMediaQuery } from "react-responsive";

function Recovery({bitrixData}) {

    const isDesktop =  useMediaQuery({ minWidth: 768 });

    return (
        <>
            <section className="recovery container-fluid px-0 d-none d-md-flex">

                <img src={isDesktop?smile:smile2} alt="Улыбка" />
                <div className="recovery__content">
                    <div className="d-md-block d-none">
                        <h2>{bitrixData.RECOVERY_TITLE}</h2>
                            {/* Цифровой протокол: 3D-восстановление */}

                        <p>{bitrixData.RECOVERY_TEXT}</p>
                            {/* Кейс Зайнап демонстрирует возможности цифровой стоматологии: от диагностики с помощью 3D-томографии и сканирования Primescan до микрохирургии и высокоточной реставрации с индивидуальным подбором оттенка. Точность и предсказуемость на каждом этапе лечения. */}

                        <Link to="/">
                            <button>
                                Подробнее
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="recovery container-fluid px-0 d-md-none d-flex flex-column">

                <h2>{bitrixData.RECOVERY_TITLE}</h2>
                <img src={isDesktop?smile:smile2} alt="Улыбка" />
                <div className="recovery__content">
                    <div>
                        <p>{bitrixData.RECOVERY_TEXT}</p>

                        <Link to="/">
                            <button>
                                {bitrixData.CASE}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default withBitrixData(Recovery);