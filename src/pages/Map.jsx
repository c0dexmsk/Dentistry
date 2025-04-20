import withBitrixContactsData from "hocs/withBitrixContantsData.js";
import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import mah from "assets/mah.png";
import mosc from "assets/mosc.png";
import mah2 from "assets/mahM.png";
import mosc2 from "assets/mosM.png";
import React from "react";
import { useMediaQuery } from "react-responsive";

function Map({bitrixData}) {

    const isDesktop = useMediaQuery ({minWidth: 768})

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                <section >
                    <div className="map-block ">
                        <h1 className=" text-center mb-md-5 mb-4 mt-0"> Контакты </h1>

                        <div className="row">

                            <div className="map-block__image col-12 col-md-4">
                                <img className="img-fluid" src={isDesktop ? mah : mah2} alt="Махачкала" />
                            </div>
                            <div className="map-block__block col-12 col-md-8 row">

                                <h2 className="col-12"> Махачкала </h2>
                                <div className="col-6">
                                    <p className="light">  улица Аскерханова, 1В </p>
                                    <div>
                                        <span className="my-1"> {bitrixData[0].NUM1 }</span>
                                        <span >{bitrixData[0].NUM2 }</span>
                                        <span >{bitrixData[0].MAIL }</span>
                                    </div>

                                    <div>
                                        <p> Режим работы: </p>
                                        <span> <span className="light"> будние - </span> {bitrixData[0].DAYS }</span>
                                        <span>  <span className="light">выходные - </span> {bitrixData[0].ENDS }</span>
                                        <span> <span className="light">последнее воскресенье месяца -   </span>  {bitrixData[0].SAT }    </span>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <p className="light"> улица Хурукринская, 11 </p>

                                    <div>
                                        <span className="my-1"> {bitrixData[1].NUM1 }</span>
                                        <span >{bitrixData[1].NUM2 }</span>
                                        <span >{bitrixData[1].MAIL }</span>
                                    </div>

                                    <div>

                                        <p> Режим работы: </p>
                                        <span> <span className="light"> будние - </span> {bitrixData[1].DAYS }</span>
                                        <span>  <span className="light">выходные - </span> {bitrixData[1].ENDS }</span>
                                        <span> <span className="light">последнее воскресенье месяца -   </span>  {bitrixData[1].SAT }    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-2 mt-md-4">
                            <div className="map-block__image col-12 col-md-4 ">
                                <img className="img-fluid" src={isDesktop ? mosc : mosc2} alt="Москва" />
                            </div>
                            <div className="map-block__block col-12 col-md-8 row">
                                <h2 className="col-12"> Город Москва </h2>
                                <div className="col-12 col-md-6">
                                        <p className="light"> улица Маршала Новикова, 11 (м. Щукинская)</p>
                                        <div>
                                            <span className="my-1"> {bitrixData[2].NUM1 }</span>
                                            <span >{bitrixData[2].NUM2 }</span>
                                            <span >{bitrixData[2].MAIL }</span>
                                        <div>
                                            <p> Режим работы: </p>
                                            <span> <span className="light"> каждый день - </span> {bitrixData[1].DAYS }</span>
                                        </div>
                                </div>
                                <div className="col-6"></div>
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