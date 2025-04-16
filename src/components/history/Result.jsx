
import img1 from "../../assets/history/zainap-1.png";
import img2 from "../../assets/history/zainap-2.png";

export default function Result ({bitrixData}) {
    
    return (
        <section>
            <div className="result margin-bottom-100 margin-top-100">
                <h2> Результат </h2>
                <div className="row flex-nowrap mt-5">
                    <div className="col-3">
                        <img className="container-fluid" src={bitrixData.RESULT_PHOTO1} alt="Зайнап" />
                    </div>
                    <div className="col-3">
                        <img className="container-fluid" src={bitrixData.RESULT_PHOTO2} alt="Зайнап" />
                    </div>
                    <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                        <p>
                        {bitrixData.RESULT1}                           
                        </p>
                        <p>
                        {bitrixData.RESULT2}       
                        </p>
                        <p>
                        {bitrixData.RESULT3}       
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}