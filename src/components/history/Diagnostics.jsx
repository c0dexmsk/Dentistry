

import { useMediaQuery } from "react-responsive";
import img1 from "../../assets/history/img1.svg";
import img2 from "../../assets/history/img2.svg";
import img3 from "../../assets/history/img3.svg";
import img4 from "../../assets/history/img4.svg";

export default function Diagnostics ({bitrixData}) {

   const isDesktop = useMediaQuery ({minWidth: 768})

    return (
        <section className={isDesktop ? "diagnostics container-fluid px-0" : "diagnostics container-fluid px-0"}>
            <div className="margin-top-100 margin-bottom-100 ">
                <div>
                    <h2 className="text-md-start text-center"> Диагностика </h2>

                    <div className="row flex-wrap flex-md-nowrap diagnostics__blocks mt-3 mt-md-5 gy-4">

                        <div className="col-6 col-md odd-block">
                            <div>
                                <p> {bitrixData.D1} </p>
                                <img src={bitrixData.D1_ICON}  alt="Анализ крови" />
                            </div>
                        </div>

                        <div className="col-6 col-md  even-block">
                            <div>
                                <p> {bitrixData.D2} </p>
                                <img id="unique-image" src={bitrixData.D2_ICON} alt="Цифровой слепок" />
                            </div>
                        </div>

                        <div className="col-6 col-md odd-block">
                            <div>
                                <p> {bitrixData.D3} </p>
                                <img src={bitrixData.D3_ICON} alt="Рентген" />
                            </div>
                        </div>

                        <div className="col-6 col-md even-block">
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