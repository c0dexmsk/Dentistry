
import DetailsButton from "../general/DetailsButton";

export default function DoctorCard ({photo, name, profession, link}) {

    return (
        <div className="doctor-card col-md-3 col-4 mx-md-3 my-md-5 d-flex flex-column justify-content-between">
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