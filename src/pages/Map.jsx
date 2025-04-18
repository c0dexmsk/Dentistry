import withBitrixContactsData from "hocs/withBitrixContantsData.js";
import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import React from "react";

function Map({bitrixData}) {

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                <section >
                    <div className="map-block">
                        <h1 className=" text-center"> Контакты </h1>

                        <div className="map-block__map">

                                <iframe className="container-fluid px-0" title="Аскерханова" src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=47.492298%2C42.967506&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjU2MTEzNBJv0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQlNCw0LPQtdGB0YLQsNC9LCDQnNCw0YXQsNGH0LrQsNC70LAsINGD0LvQuNGG0LAg0JDRgdC60LXRgNGF0LDQvdC-0LLQsCwgM9CQIgoNjfY9QhW63itC&source=serp_navig&z=17.1"></iframe>
                                
                                    <div className="map-block__map__contacts">
                                        <div className="contacts__makhachkala">
                                            <h3> Город Махачкала </h3>
                                            <div className="contacts__makhachkala__numbers">
                                                <p> улица Аскерханова, 1В </p>
                                                <span className="my-1"> {bitrixData[0].NUM1 }</span>
                                                <span >{bitrixData[0].NUM2 }</span>
                                                <span >{bitrixData[0].MAIL }</span>
                                            </div>

                                            <div className="contacts__makhachkala__numbers">
                                                <p> Режим работы: </p>
                                                <span> <span className="light"> будние - </span> {bitrixData[0].DAYS }</span>
                                                <span>  <span className="light">выходные - </span> {bitrixData[0].ENDS }</span>
                                                <span> <span className="light">последнее воскресенье месяца -   </span>  {bitrixData[0].SAT }    </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                                
                            <div className="map-block__map">

                            <iframe className="container-fluid px-0" title="Хурукринская" src="https://yandex.ru/map-widget/v1/?ll=47.565741%2C42.951830&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MTE5NjgwODgyEnDQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCU0LDQs9C10YHRgtCw0L0sINCc0LDRhdCw0YfQutCw0LvQsCwg0KXRg9GA0YPQutGA0LjQvdGB0LrQsNGPINGD0LvQuNGG0LAsIDExIgoNUUM-QhWszitC&source=serp_navig&z=17.1"></iframe>
                                
                                    <div className="map-block__map__contacts">
                                        <div className="contacts__makhachkala">
                                            <h3> Город Махачкала </h3>
                                            <div className="contacts__makhachkala__numbers">
                                                <p> улица Хурукринская, 11 </p>
                                                <span className="my-1"> {bitrixData[1].NUM1 }</span>
                                                <span >{bitrixData[1].NUM2 }</span>
                                                <span >{bitrixData[1].MAIL }</span>
                                            </div>

                                            <div className="contacts__makhachkala__numbers">
                                                <p> Режим работы: </p>
                                                <span> <span className="light"> будние - </span> {bitrixData[1].DAYS }</span>
                                                <span>  <span className="light">выходные - </span> {bitrixData[1].ENDS }</span>
                                                <span> <span className="light">последнее воскресенье месяца -   </span>  {bitrixData[1].SAT }    </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <div className="map-block__map">

                            <iframe className="container-fluid px-0" title="Маршала Новикова" src="https://yandex.ru/map-widget/v1/?ll=37.469334%2C55.802241&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc1NjE0ORJK0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JzQsNGA0YjQsNC70LAg0J3QvtCy0LjQutC-0LLQsCwgMTEiCg083BVCFc41X0I%2C&source=serp_navig&z=16.3" ></iframe>
                                
                                    <div className="map-block__map__contacts last">
                                        <div className="contacts__makhachkala">
                                            <h3> Город Москва </h3>
                                            <div className="contacts__makhachkala__numbers">
                                                <p> улица Маршала Новикова, 11 (м. Щукинская)</p>
                                                <span className="my-1"> {bitrixData[2].NUM1 }</span>
                                                <span >{bitrixData[2].NUM2 }</span>
                                                <span >{bitrixData[2].MAIL }</span>
                                            </div>

                                            <div className="contacts__makhachkala__numbers">
                                                <p> Режим работы: </p>
                                                <span> <span className="light"> каждый день - </span> {bitrixData[1].DAYS }</span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}
export default withBitrixContactsData(Map);