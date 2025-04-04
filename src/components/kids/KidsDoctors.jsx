
import aizanat from "../../assets/doctors/aizanat.png";
import dina from "../../assets/doctors/dina.png";
import kamila from "../../assets/doctors/kamilla.png";
import siadat from "../../assets/doctors/siadat.png";
import elina from "../../assets/doctors/elina.png";
import muslim from "../../assets/doctors/muslim.png";
import asiat from "../../assets/doctors/asiat.png";
import malikat from "../../assets/doctors/malikat.png";
import KidsDoctorsCard from "./KidsDoctorsCard";
import "../../styles/kids/KidsDoctors.css";
import { Link } from "react-router-dom";

export default function KidsDoctors () {

    const kidsDoctors = [
        {
            photo: aizanat,
            name: "Абдурахманова Айзанат",
            profession: "Детский стоматолог",
        },
        {
            photo: dina,
            name: "Гасанова Дина Абдулгаджиевна",
            profession: "Подростковый ортопед",
        },
        {
            photo: kamila,
            name: "Даудова Камила Гамзатовна",
            profession: "Детский стоматолог",
        },
        {
            photo: siadat,
            name: "Ибрагимова Сиядат Магомедовна",
            profession: "Детский стоматолог",
        },
        {
            photo: elina,
            name: "Курбанова Элина Багарчиевна",
            profession: "Детский стоматолог",
        },
        {
            photo: muslim,
            name: "Мурзабеков Муслим Мурзабекович",
            profession: "Детский стоматолог",
        },
        {
            photo: asiat,
            name: "Мурилова Асият Магомедовна",
            profession: "Детский стоматолог",
        },
        {
            photo: malikat,
            name: "Мусаева Маликат Магомедшапиевна",
            profession: "Детский стоматолог",
        },
    ]    

    return (
        <section>
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
                <div className="service__button-container">
                    <Link to="/kids">
                        Все десткие врачи
                    </Link>
                </div>
            </div>
        </section>
    )
}