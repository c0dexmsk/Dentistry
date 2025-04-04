import aizanat from "../../assets/doctors/abdulla.png";
import dina from "../../assets/doctors/dina.png";
import kamila from "../../assets/doctors/magomed.png";
import siadat from "../../assets/doctors/siadat.png";
import elina from "../../assets/doctors/malik.png";
import DoctorCard from "./DoctorCard";


export default function Orthopedics () {

    const doctorsList = [
        {
            photo: aizanat,
            name: "Абдулжалилов Абдулла Аминуллаевич",
            profession: "Стоматолог-ортопед",
        },
        {
            photo: "dina",
            name: "Абдуллаев Дауд Абдулхаликович",
            profession: "Стоматолог-ортопед",
        },
        {
            photo: kamila,
            name: "Абдуллаев Магомед Гаджиахмедович",
            profession: "Стоматолог-ортопед",
        },
        {
            photo: "siadat",
            name: "Канаев Гаджи Магомедиминович",
            profession: "Стоматолог-ортопед",
        },
        {
            photo: elina,
            name: "Маликов Малик Шарапудинович",
            profession: "Стоматолог-ортопед",
        },
    ]  

    return( 
        <section>
            <div className="doctors-branch">
                <h2> Ортопедия </h2>
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