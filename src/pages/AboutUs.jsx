
import ChildhoodImpressions from "../components/about/ChildhoodImpressions.jsx";
import FutureTechnology from "../components/about/FutureTechnology.jsx";
import FullCycle from "../components/about/FullCycle.jsx";
import Comfort from "../components/about/Comfort.jsx";
import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import Title from "../components/about/Title.jsx";
import Video from "../components/about/Video.jsx";

export default function AboutUs() {

    return (
        <div id="main-page-wrapper">
            <Header />
            <div>

                <Title />
                <Video />
                <FutureTechnology />
                <Comfort />
                <ChildhoodImpressions />
                <FullCycle />

            </div>
            <Footer />
        </div>
    )
}