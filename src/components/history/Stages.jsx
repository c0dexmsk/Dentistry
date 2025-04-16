import image1 from "../../assets/history/tool.svg";
import image2 from "../../assets/history/teeth.svg";
import image3 from "../../assets/history/BL2.svg";

export default function Stages ({bitrixData}) {
    
    return (
        <section> 
        
            <div className="stages margin-top-100 ">
                
                <h2> Диагностика </h2>
                
                <div className="container-fluid row mt-5 g-3">

                    <div className="col-4 stages__stage">
                        <div className="d-flex flex-row">
                            <div className="col-8">
                                <h3> {bitrixData.STEP1_H2} </h3>
                                <p> {bitrixData.STEP1_P} </p>
                            </div>
                            <div className="col">
                                <img src={bitrixData.STEP1_ICON} alt="Прибор" />
                            </div>
                        </div>
                    </div>

                    <div className="col-4 stages__stage">
                        <div className="d-flex flex-row">
                            <div className="col-10">
                                <h3> {bitrixData.STEP2_H2} </h3>
                                <p> {bitrixData.STEP2_P}</p>
                            </div>
                            <div className="col">
                                <img src={bitrixData.STEP2_ICON} alt="Зубы" />
                            </div>
                        </div>
                    </div>

                    <div className="col-4 stages__stage">
                        <div className="d-flex flex-row">
                            <div className="col-10">
                                <h3> {bitrixData.STEP3_H2}</h3>
                                <p> {bitrixData.STEP3_P}</p>
                            </div>
                            <div className="col">
                                <img src={bitrixData.STEP3_ICON} alt="BL2" />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
}