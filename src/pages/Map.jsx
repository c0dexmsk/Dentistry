import withBitrixContactsData from "hocs/withBitrixContantsData.js";
import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import mah from "assets/mah.png";
import mosc from "assets/mosc.png";
import React from "react";

function Map({bitrixData}) {

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                <section >
                    <div className="map-block row">
                        <h1 className=" text-center"> Контакты </h1>

                            <div className="map-block__image col-12 col-md-4">
                                <img src= alt="" />
                            </div>
                            <div className="map-block__block col-12 col-md-8">

                            </div>

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

                            <div className="map-block__map">

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