
import aizanat from "../../assets/doctors/garsha.png";
import dina from "../../assets/doctors/kinanat.png";
import zurab from "../../assets/doctors/shamil.png";
import arsen from "../../assets/doctors/arsen.png";

import fatima from "../../assets/doctors/fatima.png";
import alil from "../../assets/doctors/alil.png";
import naila from "../../assets/doctors/naila.png";
import siadat from "../../assets/doctors/saidat.png";

import kamil from "../../assets/doctors/kamil.png";
import patimat from "../../assets/doctors/patimat.png";

import DoctorCard from "./DoctorCard";

export default function Therapy () {

    const doctorsList = [
        {
            photo: aizanat,
            name: "Ахмедов Гарша Дамаданович",
            profession: "Стоматолог-эндодонтист",
        },
        {
            photo: dina,
            name: "Дадаева Кинанат Магомедовна",
            profession: "Стоматолог-эндодонтист",
        },
        {
            photo: "zurab",
            name: "Куннаев Зураб Магомедович",
            profession: "Стоматолог-терапевт",
        },
        {
            photo: arsen,
            name: "Курбанов Арсен Магомедкамилович",
            profession: "Стоматолог-эндодонтист",
        },

        {
            photo: fatima,
            name: "Курбанова Фатима Абдулмаликовна",
            profession: "Стоматолог-эндодонтист",
        },
        {
            photo: alil,
            name: "Кутиев Алил Казбекович",
            profession: "Стоматолог-терапевт",
        },
        {
            photo: naila,
            name: "Магомедова Наиля Алиевна",
            profession: "Стоматолог-эндодонтист",
        },
        {
            photo: siadat,
            name: "Меджидова Саидат Меджидовна",
            profession: "Стоматолог-эндодонтист",
        },

        {
            photo: kamil,
            name: "Омаров Камиль Гусейнович",
            profession: "Стоматолог-терапевт",
        },
        {
            photo: patimat,
            name: "Саидова Патимат Ахмедовна",
            profession: "Стоматолог-эндодонтист",
        },
    ]

    return(
        <section className="container">
            <div className="doctors-branch">
                <h2> Терапия </h2>
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