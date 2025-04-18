
import DetailsButton from "../general/DetailsButton";

export default function DoctorCard ({photo, name, profession, link}) {

    return (
        <div className="doctor-card col-lg-3 col-md-3 col-sm-6 mx-3 my-5 d-flex flex-column justify-content-between">
            <img src={photo} alt={name} className="img-fluid" />
            <h3> {name} </h3>
            <p> {profession} </p>
            <DetailsButton 
                title="Подробнее"
                link={`doctors/${link}`}
            />
        </div>
    )
}