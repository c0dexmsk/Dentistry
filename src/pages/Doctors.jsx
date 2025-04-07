
import Branches from "../components/doctors/Branches";
import Orthopedics from "../components/doctors/Orthopedics";
import Surgery_Implantation from "../components/doctors/Surgery_Implantation";
import Therapy from "../components/doctors/Therapy";
import Orthodontics from "../components/doctors/Orthodontics";
import Periodontology from "../components/doctors/Periodontology";
import KidsDoctorsBranch from "../components/doctors/KidsDoctorsBranch";
import Anesthesiologists from "../components/doctors/Anesthesiologists"
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

export default function Doctors () {

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                <div>

                    <Branches Title={"Врачи"}/>
                    <Orthopedics />
                    <Surgery_Implantation />
                    <Therapy />
                    <Orthodontics />
                    <Periodontology />
                    <KidsDoctorsBranch />
                    <Anesthesiologists />
                </div>
                <Footer />
            </div>
        </>
    )
}