
import withBitrixBranchesDoctorsData from "hocs/withBitrixBranchesDoctorsData";
import tamila from "../../assets/doctors/zamira.png";
import gamid from "../../assets/doctors/zariat.png";
import DoctorCard from "./DoctorCard";

function Periodontology ({bitrixData}) {

    const doctorsList = bitrixData.filter(user => user.departmentId === "9")
    //console.log(doctorsList);

    const doctorsStaticList = [
        {
            photo: tamila,
            name: "Магадова Замира Кутбутиновна",
            profession: "Пародонтолог",
            link: "magadova-zamira",
        },
        {
            photo: gamid,
            name: "Муртазалиева Жарият Муртазалиевна",
            profession: "Стоматолог-гигиенист",
            link : "murtazalieva-jariyat-hygienist"
        },
    ]

    return(
        <section className="container-fluid px-0">
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
                                link={element.link}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default withBitrixBranchesDoctorsData(Periodontology);