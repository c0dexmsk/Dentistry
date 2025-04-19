
import "../styles/services-pattern/ServicesPattern.css";
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import withBitrixServiceData from 'hocs/withBitrixServiceData';
import ServicesPatternBlock1 from "../components/services-pattern/ServicesPatternBlock";

import { contentData } from "../components/services-pattern/contentBlock.js";

import { useParams } from "react-router-dom";

function ServicesPattern ({bitrixData}) {

    const { id } = useParams();

    const content = bitrixData.find(cont => cont.id === id);

    if (!content) return <div>Услуга не найдена</div>;

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                <div>
                    <ServicesPatternBlock1 content={content}/>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default withBitrixServiceData(ServicesPattern)