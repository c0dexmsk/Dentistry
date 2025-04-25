import mainPhoto from "../../assets/history/zainap.png"
import mainPhoto2 from "../../assets/hishis.svg"
import Zainap2 from "assets/историяЗайнап.png"
import ZainapMobile from "assets/5.png"
import { useMediaQuery } from "react-responsive"

const TextSplitter = ({ text }) => {
    // Разделяем текст на предложения по точке (можно изменить разделитель)
    const sentences = text.split(/\.\s+/);

    // Берем первое предложение (если есть)
    const firstSentence = sentences.length > 0 ? sentences[0] + (sentences.length > 1 ? '.' : '') : '';

    // Объединяем остальные предложения (если есть)
    const restText = sentences.length > 1 ? sentences.slice(1).join('. ') + '' : '';

    return (
      <div className="split-text">
        {firstSentence && <p className="first-sentence">{firstSentence}</p>}
        {restText && <p className="rest-text">{restText}</p>}
      </div>
    );
};

export default function HistoryTitle ({bitrixData}) {

    const isDesktop = useMediaQuery({minWidth: 768})

    return (
        <section className="container px-0 px-md-auto">

            <div className="history-title column">

                <h1 className="text-center d-none d-md-block"> {bitrixData.TITLE} </h1>

                <div className="container-fluid px-0 row mt-3 mt-md-0">
                    <div className="col-6">
                        <img className="img-fluid"
                        // src={bitrixData.TITLE_PHOTO}
                        src={isDesktop ? Zainap2 : ZainapMobile}
                        alt="Главное фото" />
                    </div>
                    <div className="col-6">
                        <h1 className="d-block d-md-none"> {bitrixData.TITLE} </h1>
                        <h2> {bitrixData.TITLE_H2} </h2>
                        <TextSplitter text={bitrixData.TITLE_P} />
                    </div>
                </div>


            </div>
        </section>
    )
}