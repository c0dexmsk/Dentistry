import aizanat from "../../assets/doctors/usuf.png";
import dina from "../../assets/doctors/gadzi.png";
import kamila from "../../assets/doctors/shamil.png";
import siadat from "../../assets/doctors/nurudin.png";
import DoctorCard from "./DoctorCard";


export default function Surgery_Implantation () {

    const doctorsList = [
        {
            photo: aizanat,
            name: "Гитихмаев Юсуф Магомедович",
            profession: "Стоматолог-хирург Челюстно-лицевой хирург",
        },
        {
            photo: dina,
            name: "Ибрагимов Гаджи Бахмудович",
            profession: "Стоматолог-имплантолог",
        },
        {
            photo: kamila,
            name: "Сулейманов Шамиль Гусейнович",
            profession: "Стоматолог-хирург",
        },
        {
            photo: siadat,
            name: "Нурудинов Нурудин Муртазалиевич",
            profession: "Стоматолог-хирург",
        },
    ]

    return(
        <section className="container">
            <div className="doctors-branch">
                <h2> Хирургия/имплантация </h2>
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