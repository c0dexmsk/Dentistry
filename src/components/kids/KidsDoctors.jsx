
import KidsDoctorsCard from "./KidsDoctorsCard";
import "../../styles/kids/KidsDoctors.css";

export default function KidsDoctors ({kidsDoctors}) {

    return (
        <section className="container">
            <div className="kids-doctors">
                <h2> Детские врачи </h2>
                <div className="kids-doctors__grid row p-0 row border-box">
                    {kidsDoctors.map((element, index) =>  {
                        return (
                            <KidsDoctorsCard
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