
import img1 from "../../assets/history/zainap-1.png";
import img2 from "../../assets/history/zainap-2.png";

export default function Result () {
    
    return (
        <section>
            <div className="result margin-bottom-100 margin-top-100">
                <h2> Результат </h2>
                <div className="row flex-nowrap mt-5">
                    <div className="col-3">
                        <img className="container-fluid" src={img1} alt="Зайнап" />
                    </div>
                    <div className="col-3">
                        <img className="container-fluid" src={img2} alt="Зайнап" />
                    </div>
                    <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                        <p>
                            Зайнап покидала клинику с сияющей улыбкой, отражающей её внутренние перемены.                            
                        </p>
                        <p>
                            На каждом этапе – от санации до установки керамических реставраций – она наблюдала, как преображается
                            её улыбка. Пациентка осталась довольна достигнутым эстетическим и функциональным результатом лечения. 
                        </p>
                        <p>
                            Зайнап, это был удивительный путь. 
                            Спасибо за доверие.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}