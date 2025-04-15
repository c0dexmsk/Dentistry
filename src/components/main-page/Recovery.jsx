
import { Link } from "react-router-dom";
import smile from "../../assets/smile.svg"
import withBitrixData from '../../hocs/withBitrixData';

// const root = document.getElementById('root');
// const title = root.dataset.recoveryTitle;
// const text = root.dataset.recoveryText;

function Recovery({bitrixData}) {

    return (
        <>
            <section className="recovery container-fluid">
                <img src={smile} alt="Улыбка" />
                <div className="recovery__content">
                    <div>

                        {/* <h2 dangerouslySetInnerHTML={{ __html: title || "Цифровой протокол: 3D-восстановление CUSTOM" }} />
                        <p dangerouslySetInnerHTML={{ __html: text || " Кейс Зайнап демонстрирует возможности цифровой стоматологии: от диагностики с помощью 3D-томографии и сканирования Primescan до микрохирургии и высокоточной реставрации с индивидуальным подбором оттенка. Точность и предсказуемость на каждом этапе лечения." }} /> */}
                        
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
        </>
    )
}
export default withBitrixData(Recovery);