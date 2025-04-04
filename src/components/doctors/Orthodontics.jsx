import tamila from "../../assets/doctors/tamila.png";
import gamid from "../../assets/doctors/gamid.png";
import DoctorCard from "./DoctorCard";


export default function Orthodontics () {

    const doctorsList = [
        {
            photo: tamila,
            name: "Асланова Тамила Замрутдиновна",
            profession: "Стоматолог-ортодонт",
            link: 'aslanova-tamila',
        },
        {
            photo: gamid,
            name: "Хуцаев Гамид Магаманд-алиевич",
            profession: "Стоматолог-ортодонт",
            link: 'khutsaev-gamid'
        },
    ]  

    return( 
        <section>
            <div className="doctors-branch">
                <h2> Ортодонтия </h2>
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