import image1 from "../../assets/history/tool.svg";
import image2 from "../../assets/history/teeth.svg";
import image3 from "../../assets/history/BL2.svg";

export default function Stages () {
    
    return (
        <section> 
        
            <div className="stages margin-top-100 ">
                
                <h2> Диагностика </h2>
                
                <div className="container-fluid row mt-5 g-3">

                    <div className="col-4 stages__stage">
                        <div className="d-flex flex-row">
                            <div className="col-8">
                                <h3> Лечение кариеса </h3>
                                <p> Перелечивание ранее лечёных корневых каналов
                                с использованием микроскопа Carl Zeiss. </p>
                            </div>
                            <div className="col">
                                <img src={image1} alt="Прибор" />
                            </div>
                        </div>
                    </div>

                    <div className="col-4 stages__stage">
                        <div className="d-flex flex-row">
                            <div className="col-10">
                                <h3> Хирургический этап </h3>
                                <p> Удаление функциональных зубов </p>
                                <p> Одномоментная имплантация с пластикой десны.</p>
                                <p>  Установка южнокорейских имплантов Osstem и шведских имплантов Nobel Biocare. </p>
                            </div>
                            <div className="col">
                                <img src={image2} alt="Зубы" />
                            </div>
                        </div>
                    </div>

                    <div className="col-4 stages__stage">
                        <div className="d-flex flex-row">
                            <div className="col-10">
                                <h3> Ортопедический этап </h3>
                                <p> Установка постоянных керамических реставраций с индивидуальным подбором цвета зубов – оттенок BL2 по шкале VITA Bleachedguide. </p>
                            </div>
                            <div className="col">
                                <img src={image3} alt="BL2" />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
}