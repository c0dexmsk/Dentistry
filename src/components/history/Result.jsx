
import img1 from "../../assets/history/zainap-1.png";
import img2 from "../../assets/history/zainap-2.png";

export default function Result ({bitrixData}) {

    return (
        <section>
            <div className="result margin-bottom-100 margin-top-100">
                <h2> РЕЗУЛЬТАТ </h2>
                <div className="row flex-md-nowrap flex-wrap mt-3 mt-md-5">
                    <div className="col-md-3 col-6">
                        <img className="container-fluid px-0" src={bitrixData.RESULT_PHOTO1} alt="Зайнап" />
                    </div>
                    <div className="col-md-3 col-6">
                        <img className="container-fluid px-0" src={bitrixData.RESULT_PHOTO2} alt="Зайнап" />
                    </div>
                    <div className="col-md-6 col-12 d-flex flex-column align-items-start justify-content-center">
                        <p>
                        {bitrixData.RESULT1}
                        </p>
                        <p>
                        {bitrixData.RESULT2}
                        </p>
                        <p className="thanks">
                        {bitrixData.RESULT3}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}