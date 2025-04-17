import withBitrixBranchesDoctorsData from "hocs/withBitrixBranchesDoctorsData";
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

function KidsDoctorsBranch ({bitrixData}) {

    const kidsDoctors = bitrixData.filter(user => user.departmentId === "11")

    const doctorList = [
        {
            photo: aizanat,
            name: "Абдурахманова Айзанат",
            profession: "Детский стоматолог",
            link: "abdurakhmanova-aizanat"
        },
        {
            photo: dina,
            name: "Гасанова Дина Абдулгаджиевна",
            profession: "Подростковый ортопед",
            link: "hasanova-dina"
        },
        {
            photo: kamila,
            name: "Даудова Камила Гамзатовна",
            profession: "Детский стоматолог",
            link: "daudova-kamila"
        },
        {
            photo: siadat,
            name: "Ибрагимова Сиядат Магомедовна",
            profession: "Детский стоматолог",
            link: "ibragimova-siyadat"
        },
        {
            photo: elina,
            name: "Курбанова Элина Багарчиевна",
            profession: "Детский стоматолог",
            link: "kurbanova-elina"
        },
        {
            photo: muslim,
            name: "Мурзабеков Муслим Мурзабекович",
            profession: "Детский стоматолог",
            link: "murzabekov-muslim"
        },
        {
            photo: asiat,
            name: "Мурилова Асият Магомедовна",
            profession: "Детский стоматолог",
            link: "murilova-asiyat"
        },
        {
            photo: malikat,
            name: "Мусаева Маликат Магомедшапиевна",
            profession: "Детский стоматолог",
            link: "musaeva-malikat"
        },
        {
            photo: fatima,
            name: "Нагметова Фатима Казбековна",
            profession: "Детский стоматолог",
            link: "nagmetova-fatima"
        },
        {
            photo: aishat,
            name: "Нажмудинова Айшат Нажмудиновна",
            profession: "Детский стоматолог",
            link: "nazhmudinova-aishat"
        },
        {
            photo: azai,
            name: "Ахмедова Ажай Цахаевна",
            profession: "Детский стоматолог",
            link: "akhmedova-azhay"
        },
        {
            photo: "malikat",
            name: "Гаргацова Марьям Дамадановна",
            profession: "Детский стоматолог",
            link: "gargatsova-maryam"
        },
        {
            photo: "asiat",
            name: "Омаргаджиева Асият Расуловна",
            profession: "Детский стоматолог",
            link: "omargadzhieva-asiyat"
        },
        {
            photo: "malikat",
            name: "Халимова Патимат Муслимовна",
            profession: "Детский стоматолог",
            link: "khalimova-patimat"
        },
        {
            photo: "malikat",
            name: "Алиев Мурад Гаджимагомедович",
            profession: "Подростковый ортопед",
            link: "aliev-murad"
        }
    ];
    return( 
        <div id="all-kids-doctors-container">
            <KidsDoctors 
                kidsDoctors={kidsDoctors}
            />
        </div>
    )
}

export default withBitrixBranchesDoctorsData(KidsDoctorsBranch);