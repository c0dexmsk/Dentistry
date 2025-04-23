
import withBitrixBranchesDoctorsData from "hocs/withBitrixBranchesDoctorsData";
import tamila from "../../assets/doctors/zamira.png";
import gamid from "../../assets/doctors/zariat.png";
import DoctorCard from "./DoctorCard";

 function Anesthesiologists ({bitrixData}) {

    const doctorsList = bitrixData.filter(user => user.departmentId === "10")

    const doctorsStaticList = [
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
        <section className="container-fluid px-0">
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
                                link={element.link}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default withBitrixBranchesDoctorsData(Anesthesiologists);