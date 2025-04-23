import withBitrixBranchesDoctorsData from "hocs/withBitrixBranchesDoctorsData";

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

function Therapy ({bitrixData}) {

    const doctorsList = bitrixData.filter(user => user.departmentId === "7")
    //console.log(doctorsList);

    const doctorsStaticList = [
        {
            photo: aizanat,
            name: "Ахмедов Гарша Дамаданович",
            profession: "Стоматолог-эндодонтист",
            link: "akhmedov-garsha"
        },
        {
            photo: dina,
            name: "Дадаева Кинанат Магомедовна",
            profession: "Стоматолог-эндодонтист",
            link: "dadaeva-kinanat"
        },
        {
            photo: "zurab",
            name: "Куннаев Зураб Магомедович",
            profession: "Стоматолог-терапевт",
            link: "kunnaev-zurab"
        },
        {
            photo: arsen,
            name: "Курбанов Арсен Магомедкамилович",
            profession: "Стоматолог-эндодонтист",
            link: "kurbanov-arsen"
        },
        {
            photo: fatima,
            name: "Курбанова Фатима Абдулмаликовна",
            profession: "Стоматолог-эндодонтист",
            link: "kurbanova-fatima"
        },
        {
            photo: alil,
            name: "Кутиев Алил Казбекович",
            profession: "Стоматолог-терапевт",
            link: "kutiev-alil"
        },
        {
            photo: naila,
            name: "Магомедова Наиля Алиевна",
            profession: "Стоматолог-эндодонтист",
            link: "magomedova-nailya"
        },
        {
            photo: siadat,
            name: "Меджидова Саидат Меджидовна",
            profession: "Стоматолог-эндодонтист",
            link: "medzhidova-saidat"
        },
        {
            photo: kamil,
            name: "Омаров Камиль Гусейнович",
            profession: "Стоматолог-терапевт",
            link: "omarov-kamil"
        },
        {
            photo: patimat,
            name: "Саидова Патимат Ахмедовна",
            profession: "Стоматолог-эндодонтист",
            link: "saidova-patimat"
        },
    ];

    return(
        <section className="container-fluid px-0">
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
                                link={element.link}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )

}
export default withBitrixBranchesDoctorsData(Therapy);