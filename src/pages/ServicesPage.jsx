import ListOfServices from "../components/services/ListOfServices";
import Branches from "../components/doctors/Branches";
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";

export default function ServicesPage () {

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                <div>
                    <Branches Title={"Услуги"} />
                    <ListOfServices />
                </div>
                <Footer />
            </div>
        </>
    )
}