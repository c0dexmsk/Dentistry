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
import photoA from "../components/doctors/doctorsProfilePhoto/абдулжалилов.png"

import withBitrixDoctorsData from "../hocs/withBitrixDoctorsData";
import { useMediaQuery } from "react-responsive";

function DoctorProfile({bitrixData}) {

    const isDesktop = useMediaQuery({minWidth: 768});
    const { slug } = useParams();
    const doctorData = bitrixData;
    // const doctorData = bitrixData.find(doc => doc.slug === slug);
    const navigate = useNavigate();
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
            {isDesktop ? (
                <div className="info-section">
                     <div className="icon-text">
                        <img src={education} alt="Образование" />
                        <h2>Образование:</h2>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: doctorData.education.TEXT }} />
                </div>
            ) : (
                null
            )}

                <button className="appointment-btn d-none d-md-block">Записаться на прием</button>
            </div>

            <div className="col-md-6 col-6 doctor-photo">
                <img
                    src={photoA}
                    // src={doctorData.photo}
                    alt={doctorData.name}
                    className="img-fluid"
                />
            </div>
        </div>
        {isDesktop ? (
            null
        ) : (
            <div className="info-section">
                <div className="icon-text">
                    <img src={education} alt="Образование" />
                    <h2>Образование:</h2>
                </div>
                    <p dangerouslySetInnerHTML={{ __html: doctorData.education.TEXT }} />
            </div>
        )}
         <button className="appointment-btn d-block d-md-none">Записаться на прием</button>
    </div>
  );
}

export default withBitrixDoctorsData(DoctorProfile);