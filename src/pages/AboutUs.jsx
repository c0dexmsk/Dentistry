
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

                <Title 
                    titleh1="Bego Clinic"
                    titleh2="Стоматология поколений"
                    description1="В Bego мы храним обычаи семейной стоматологии и с радостью встречаем представителей всех поколений.  Два десятилетия постоянного развития позволили нам создать пространство, где базовые ценности —  качество, надежность и удобство лечения — объединяются в авторский комплексный подход, ориентированный на достижение желаемого результата для каждого. "
                    description2="Уверенность в каждом касании – вот что отличает Bego. Мы используем только самые актуальные решени в стоматологии, а наши главные инструменты – это опыт, доверие и эмпатия.  Наша команда – это не просто специалисты, а настоящие хранители улыбок, готовые максимально компетентно, уверенно и бережно провести вас по пути к идеальному самочувствию. "
                />
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