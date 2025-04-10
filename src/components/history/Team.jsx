import img1 from "../../assets/history/malik.png";
import img2 from "../../assets/history/shamil.png";
import img3 from "../../assets/history/gadzi.png";
import { Link } from "react-router-dom";

export default function Team () {
 
    return (
        <section>
            <div className="team margin-top-100">
                <h2> Команда  </h2>

                <div className="row flex-nowrap mt-5">
                    <div className="col-3">
                        <img className="container-fluid" src={img1} alt="Маликов Малик Шарапудинович" />
                        <h3> Маликов Малик Шарапудинович </h3>
                        <p> Стоматолог-ортопед </p>

                        <Link to="/doctors/malikov-malik"> Подробнее </Link>
                    </div>

                    <div className="col-3">
                        <img className="container-fluid" src={img2} alt="Сулейманов Шамиль Гусейнович" />
                        <h3> Сулейманов Шамиль Гусейнович </h3>
                        <p> Стоматолог-хирург </p>

                        <Link to="/doctors/suleymanov-shamil"> Подробнее </Link>
                    </div>

                    <div className="col-3">
                        <img className="container-fluid" src={img3} alt="Ибрагимов Гаджи Бахмудович" />
                        <h3> Ибрагимов Гаджи Бахмудович </h3>
                        <p> Стоматолог-имплантолог </p>

                        <Link to="/doctors/ibragimov-gadzhi"> Подробнее </Link>
                    </div>
                </div>
            </div>  
        </section>
    )
}