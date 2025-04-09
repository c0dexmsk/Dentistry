
import KidsDoctorsCard from "./KidsDoctorsCard";

export default function KidsDoctors ({kidsDoctors, link}) {

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
                                link={element.link}
                            />
                        )
                    })}
                </div>

            </div>
        </section>
    )
}