

import img1 from "../../assets/history/img1.svg";
import img2 from "../../assets/history/img2.svg";
import img3 from "../../assets/history/img3.svg";
import img4 from "../../assets/history/img4.svg";

export default function Diagnostics ({bitrixData}) {

    return (
        <section className="diagnostics container-fluid margin-top-100">
            <div className="margin-top-100 margin-bottom-100">
                <div>
                    <h2> Диагностика </h2>

                    <div className="row flex-nowrap diagnostics__blocks mt-5">

                        <div className="col odd-block">
                            <div>
                                <p> {bitrixData.D1} </p>
                                <img src={bitrixData.D1_ICON}  alt="Анализ крови" />
                            </div>
                        </div>

                        <div className="col even-block">
                            <div>
                                <p> {bitrixData.D2} </p>
                                <img id="unique-image" src={bitrixData.D2_ICON} alt="Цифровой слепок" />
                            </div>
                        </div>

                        <div className="col odd-block">
                            <div>
                                <p> {bitrixData.D3} </p>
                                <img src={bitrixData.D3_ICON} alt="Рентген" />
                            </div>
                        </div>
                        
                        <div className="col even-block">
                            <div>
                                <p> {bitrixData.D4} 
                                </p>
                                <img src={bitrixData.D4_ICON}  alt="Чистка зубов" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}