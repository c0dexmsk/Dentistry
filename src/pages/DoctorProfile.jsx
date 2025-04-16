import { useParams } from "react-router-dom";
import { doctors } from "../components/doctors/doctorsData";
import "../styles/doctors/DoctorsCard.css";
import { useNavigate } from 'react-router-dom';

import arrow from "../components/doctors/arrow.svg";
import close from "../components/doctors/close.svg";
import specialization from "../components/doctors/specialization.svg";
import direction from "../components/doctors/direction.svg";
import experience from "../components/doctors/experience.svg";
import education from "../components/doctors/education.svg";

import withBitrixDoctorsData from "../hocs/withBitrixDoctorsData";

function DoctorProfile({bitrixData}) {

  const { slug } = useParams();
//   const bitrixData = doctors.find(doc => doc.slug === slug);
  const navigate = useNavigate();
  if (!bitrixData) return <div>Доктор не найден</div>;

  return (
    <div className="doctor-profile d-flex flex-column flex-wrap justify-content-end g-0 align-items-end">

        <div className="container-fluid col-md-6 flex-grow-1 d-flex flex-column">

            <button onClick={() => navigate(-1)}>
                <img src={arrow} alt="стрелка назад" />
            </button>

            <button onClick={() => navigate("/doctors")}>
                <img src={close} alt="закрыть" />
            </button>

            <h1>{bitrixData.name}</h1>

            <div>
                <h2>Специализация:</h2>
                <img src={specialization} alt="Специализация" />
            </div>
            <p> {bitrixData.specialization} </p>

            <div>
                <h2>Направление лечения: </h2>
                <img src={direction} alt="Направление лечения" />
            </div>
            <p> {bitrixData.direction} </p>

            <div>
                <h2>Стаж:</h2>
                <img src={experience} alt="Стаж" />
            </div>
            <p> {bitrixData.experience} </p>

            <div>
                <h2>Образование: </h2>
                <img src={education} alt="Образование" />
            </div>
            
            <p
                dangerouslySetInnerHTML={{ __html: bitrixData.education.TEXT }}
            />

            <button>Записаться на прием</button>
            
        </div>

        <div className="col-md-6 flex-grow-1">
             <img src={bitrixData.photo} alt={bitrixData.name} className="img-fluid h-100 object-fit-cover" />
        </div>
        
    </div>
  );
}

export default withBitrixDoctorsData(DoctorProfile);