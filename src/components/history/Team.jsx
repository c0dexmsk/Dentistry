import img1 from "../../assets/history/malik.png";
import img2 from "../../assets/history/shamil.png";
import img3 from "../../assets/history/gadzi.png";
import { Link } from "react-router-dom";

export default function Team ({bitrixData}) {

    return (
        <section>
            <div className="team margin-top-100">
                <h2> КОМАНДА </h2>

                <div className="row flex-nowrap mt-3 mt-md-5 team-block">
                    <div className="col-md-3 col-4">
                        <img className="container-fluid px-0" src={bitrixData.PHOTO1} alt="Маликов Малик Шарапудинович" />
                        <h3> {bitrixData.NAME1} </h3>
                        <p>  {bitrixData.SPECIALIZATION1} </p>

                        <Link to="/doctors/malikov-malik"> Подробнее </Link>
                    </div>

                    <div className="col-md-3 col-4">
                        <img className="container-fluid px-0" src={bitrixData.PHOTO2} alt="Сулейманов Шамиль Гусейнович" />
                        <h3> {bitrixData.NAME2} </h3>
                        <p> {bitrixData.SPECIALIZATION2} </p>

                        <Link to="/doctors/suleymanov-shamil"> Подробнее </Link>
                    </div>

                    <div className="col-md-3 col-4">
                        <img className="container-fluid px-0" src={bitrixData.PHOTO3} alt="Ибрагимов Гаджи Бахмудович" />
                        <h3>  {bitrixData.NAME3} </h3>
                        <p> {bitrixData.SPECIALIZATION3} </p>

                        <Link to="/doctors/ibragimov-gadzhi"> Подробнее </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}