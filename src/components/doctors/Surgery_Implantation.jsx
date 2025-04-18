import withBitrixBranchesDoctorsData from "hocs/withBitrixBranchesDoctorsData";
import aizanat from "../../assets/doctors/usuf.png";
import dina from "../../assets/doctors/gadzi.png";
import kamila from "../../assets/doctors/shamil.png";
import siadat from "../../assets/doctors/nurudin.png";
import DoctorCard from "./DoctorCard";


function Surgery_Implantation ({bitrixData}) {

    const doctorsList = bitrixData.filter(user => user.departmentId === "5")
    console.log(doctorsList);

    const doctorsStaticList = [
        {
            photo: aizanat,
            name: "Гитихмаев Юсуф Магомедович",
            profession: "Стоматолог-хирург Челюстно-лицевой хирург",
            link: "gitihmaev-yusuf"
        },
        {
            photo: dina,
            name: "Ибрагимов Гаджи Бахмудович",
            profession: "Стоматолог-имплантолог",
            link: "ibragimov-gadzhi"
        },
        {
            photo: kamila,
            name: "Сулейманов Шамиль Гусейнович",
            profession: "Стоматолог-хирург",
            link: "suleymanov-shamil"
        },
        {
            photo: siadat,
            name: "Нурудинов Нурудин Муртазалиевич",
            profession: "Стоматолог-хирург",
            link: "nurudinov-nurudin"
        },
    ]

    return(
        <section className="container-fluid px-0">
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
                                link={element.link}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default withBitrixBranchesDoctorsData(Surgery_Implantation)