

import img1 from "../../assets/history/img1.svg";
import img2 from "../../assets/history/img2.svg";
import img3 from "../../assets/history/img3.svg";
import img4 from "../../assets/history/img4.svg";

export default function Diagnostics () {

    return (
        <section className="diagnostics container-fluid margin-top-100">
            <div className="margin-top-100 margin-bottom-100">
                <h2> Диагностика </h2>

                <div className="row flex-nowrap diagnostics__blocks mt-5">

                    <div className="col odd-block">
                        <div>
                            <p> Клинический анализ крови </p>
                            <img src={img1} alt="Анализ крови" />
                        </div>
                    </div>

                    <div className="col even-block">
                        <div>
                            <p> Создание цифрового слепка с использованием сканера Primescan </p>
                            <img id="unique-image" src={img2} alt="Цифровой слепок" />
                        </div>
                    </div>

                    <div className="col odd-block">
                        <div>
                            <p> КТ на аппарате Planmeca G7 </p>
                            <img src={img3} alt="Рентген" />
                        </div>
                    </div>
                    
                    <div className="col even-block">
                        <div>
                            <p> Профессиональная чистка зубов с использованием EMS Airflow Prophylaxis Master 
                            </p>
                            <img src={img4} alt="Чистка зубов" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}