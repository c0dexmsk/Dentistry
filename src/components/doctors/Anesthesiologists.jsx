
import tamila from "../../assets/doctors/zamira.png";
import gamid from "../../assets/doctors/zariat.png";
import DoctorCard from "./DoctorCard";

export default function Anesthesiologists () {

    const doctorsList = [
        {
            photo: "tamila",
            name: "Рамазанова Милейсат Гаджиевна",
            profession: "Врач анестезиолог-реаниматолог",
            link: "ramazanova-mileysat"
        },
        {
            photo: "gamid",
            name: "Гелачев Шамиль Гаирбегович",
            profession: "Врач анестезиолог-реаниматолог",
            link: "gelachev-shamil"
        },
    ]

    return(
        <section className="container">
            <div className="doctors-branch">
                <h2> Анестезиологи </h2>
                <div className="doctors-branch__grid row p-0 row border-box">
                    {doctorsList.map((element, index) =>  {
                        return (
                            <DoctorCard
                                key={index}
                                photo={element.photo}
                                name={element.name}
                                profession={element.profession}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}