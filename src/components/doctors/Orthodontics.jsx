import withBitrixBranchesDoctorsData from "hocs/withBitrixBranchesDoctorsData";
import tamila from "../../assets/doctors/tamila.png";
import gamid from "../../assets/doctors/gamid.png";
import DoctorCard from "./DoctorCard";

function Orthodontics ({bitrixData}) {

    const doctorsList = bitrixData.filter(user => user.departmentId === "8")
    console.log(doctorsList);

    const doctorsStaticList = [
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
        <section className="container-fluid px-0">
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
export default withBitrixBranchesDoctorsData(Orthodontics);