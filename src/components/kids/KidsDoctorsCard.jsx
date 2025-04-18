
import DetailsButton from "../general/DetailsButton"

export default function KidsDoctorsCard ({photo, name, profession, link}) {

    return (
        <div className="kids-doctors__grid__card doctor-card col-lg-3 col-md-3 col-sm-6 mx-3 my-5">
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