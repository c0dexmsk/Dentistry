import { useParams, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../styles/doctors/DoctorsCard.css";

import arrow from "../components/doctors/arrow.svg";
import close from "../components/doctors/close.svg";
import specialization from "../components/doctors/specialization.svg";
import direction from "../components/doctors/direction.svg";
import experience from "../components/doctors/experience.svg";
import education from "../components/doctors/education.svg";

import withBitrixDoctorsData from "../hocs/withBitrixDoctorsData";

function DoctorProfile({ bitrixData }) {
  const { slug } = useParams();
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();

  // Находим врача по slug
  const doctorData = bitrixData.find(doc => doc.slug === slug);

  if (!doctorData) return <div>Доктор не найден</div>;

  return (
    <div className="doctor-profile">
      <div className="container-fluid px-0 d-flex flex-column flex-md-row">
        <div className="col-md-6 col-6 doctor-info">
          <button onClick={() => navigate(-1)}>
            <img src={arrow} alt="стрелка назад" />
          </button>

          <button onClick={() => navigate("/doctors")}>
            <img src={close} alt="закрыть" />
          </button>

          <h1>{doctorData.name}</h1>

          <div className="info-section">
            <div className="icon-text">
              <img src={specialization} alt="Специализация" />
              <h2>Специализация:</h2>
            </div>
            <p>{doctorData.specialization}</p>
          </div>

          <div className="info-section">
            <div className="icon-text">
              <img src={direction} alt="Направление" />
              <h2>Направление:</h2>
            </div>
            <p>{doctorData.direction}</p>
          </div>

          <div className="info-section">
            <div className="icon-text">
              <img src={experience} alt="Стаж" />
              <h2>Стаж:</h2>
            </div>
            <p>{doctorData.experience}</p>
          </div>

          {isDesktop && (
            <div className="info-section">
              <div className="icon-text">
                <img src={education} alt="Образование" />
                <h2>Образование:</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: doctorData.education }} />
            </div>
          )}

          <button className="appointment-btn d-none d-md-block">Записаться на прием</button>
        </div>

        <div className="col-md-6 col-6 doctor-photo">
          <img
            src={doctorData.photo}
            alt={doctorData.name}
            className="img-fluid"
          />
        </div>
      </div>

      {!isDesktop && (
        <div className="info-section">
          <div className="icon-text">
            <img src={education} alt="Образование" />
            <h2>Образование:</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: doctorData.education }} />
        </div>
      )}

      <button className="appointment-btn d-block d-md-none">Записаться на прием</button>
    </div>
  );
}

export default withBitrixDoctorsData(DoctorProfile);