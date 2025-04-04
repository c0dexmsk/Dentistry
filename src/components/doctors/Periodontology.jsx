
import tamila from "../../assets/doctors/zamira.png";
import gamid from "../../assets/doctors/zariat.png";
import DoctorCard from "./DoctorCard";

export default function Periodontology () {

    const doctorsList = [
        {
            photo: tamila,
            name: "Магадова Замира Кутбутиновна",
            profession: "Пародонтолог",
        },
        {
            photo: gamid,
            name: "Муртазалиева Жарият Муртазалиевна",
            profession: "Стоматолог-гигиенист",
        },
    ]  

    return( 
        <section>
            <div className="doctors-branch">
                <h2> Пародонтология </h2>
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