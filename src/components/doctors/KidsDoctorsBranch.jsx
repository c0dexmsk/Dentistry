import aizanat from "../../assets/doctors/aizanat.png";
import dina from "../../assets/doctors/dina.png";
import kamila from "../../assets/doctors/kamilla.png";
import siadat from "../../assets/doctors/siadat.png";
import elina from "../../assets/doctors/elina.png";
import muslim from "../../assets/doctors/muslim.png";
import asiat from "../../assets/doctors/asiat.png";
import malikat from "../../assets/doctors/malikat.png";

import fatima from "../../assets/doctors/fatima.png";
import aishat from "../../assets/doctors/aishat.png";
import azai from "../../assets/doctors/azai.png";

import KidsDoctors from "../kids/KidsDoctors";


export default function KidsDoctorsBranch () {
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

        {
            photo: fatima,
            name: "Нагметова Фатима Казбековна",
            profession: "Детский стоматолог",
        },
        {
            photo: aishat,
            name: "Нажмудинова Айшат Нажмудиновна",
            profession: "Детский стоматолог",
        },
        {
            photo: azai,
            name: "Ахмедова Ажай Цахаевна",
            profession: "Детский стоматолог",
        },
        {
            photo: "malikat",
            name: "Гаргацова Марьям Дамадановна",
            profession: "Детский стоматолог",
        },
        {
            photo: "asiat",
            name: "Омаргаджиева Асият Расуловна",
            profession: "Детский стоматолог",
        },
        {
            photo: "malikat",
            name: "Халимова Патимат Муслимовна",
            profession: "Детский стоматолог",
        },
        {
            photo: "malikat",
            name: "Алиев Мурад Гаджимагомедович",
            profession: "Подростковый ортопед",
        }
    ] 
    return( 
        <div id="all-kids-doctors-container">
            <KidsDoctors 
                kidsDoctors={kidsDoctors}
            />
        </div>
    )
}