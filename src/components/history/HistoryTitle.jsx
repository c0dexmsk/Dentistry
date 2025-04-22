import mainPhoto from "../../assets/history/zainap.png"
import mainPhoto2 from "../../assets/hishis.svg"
import Zainap2 from "assets/историяЗайнап.png"

export default function HistoryTitle ({bitrixData}) {

    return (
        <section className="container ">

            <div className="history-title column">

                <h1 className="text-center d-none d-md-block"> {bitrixData.TITLE} </h1>

                <div className="container-fluid px-0 row mt-3 mt-md-0">
                    <div className="col-6">
                        <img className="img-fluid"
                        // src={bitrixData.TITLE_PHOTO}
                        src={Zainap2}
                        alt="Главное фото" />
                    </div>
                    <div className="col-6">
                        <h1 className="d-block d-md-none"> {bitrixData.TITLE} </h1>
                        <h2> {bitrixData.TITLE_H2} </h2>
                        <p>
                            {bitrixData.TITLE_P}
                        </p>
                    </div>
                </div>


            </div>
        </section>
    )
}