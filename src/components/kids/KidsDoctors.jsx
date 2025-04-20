
import KidsDoctorsCard from "./KidsDoctorsCard";
import { useMediaQuery } from "react-responsive";

export default function KidsDoctors ({kidsDoctors, link}) {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    const displayedDoctors = isMobile
        ? kidsDoctors.slice(0, 6) // Берем первые 6 элементов на мобильных
        : kidsDoctors; // На десктопе все врачи

    return (
        <section className="container-fluid px-0">
            <div className="kids-doctors">
                <h2> Детские врачи </h2>
                <div className="kids-doctors__grid row p-0 row border-box justify-content-md-between justify-content-center">
                    {displayedDoctors.map((element, index) =>  {
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