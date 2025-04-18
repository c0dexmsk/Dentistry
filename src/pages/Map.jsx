import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import React from "react";

export default function Map() {

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                <section >
                    <div className="map-block">
                        <h1 className=" text-center"> Контакты </h1>

                        <div className="map-block__map">

                                <iframe className="container-fluid px-0" title="Аскерханова" src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=47.492298%2C42.967506&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjU2MTEzNBJv0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQlNCw0LPQtdGB0YLQsNC9LCDQnNCw0YXQsNGH0LrQsNC70LAsINGD0LvQuNGG0LAg0JDRgdC60LXRgNGF0LDQvdC-0LLQsCwgM9CQIgoNjfY9QhW63itC&source=serp_navig&z=17.1" frameborder="1" allowfullscreen="true"></iframe>
                                
                                    <div className="map-block__map__contacts">
                                        <div className="contacts__makhachkala">
                                            <h3> Город Махачкала </h3>
                                            <div className="contacts__makhachkala__numbers">
                                                <p> улица Аскерханова, 1В </p>
                                                <span className="my-1">+7 989 877 78 88 </span>
                                                <span >+7 988 777 88 87 (Дети)</span>
                                            </div>

                                            <div className="contacts__makhachkala__numbers">
                                                <p> Режим работы: </p>
                                                <span> <span className="light"> будние - </span> 08:00-20:00</span>
                                                <span>  <span className="light">выходные - </span> 09:00-19:00 </span>
                                                <span> <span className="light">последнее воскресенье месяца -   </span>  09:00-15:00    </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                                
                            <div className="map-block__map">

                            <iframe className="container-fluid px-0" title="Хурукринская" src="https://yandex.ru/map-widget/v1/?ll=47.565741%2C42.951830&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MTE5NjgwODgyEnDQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCU0LDQs9C10YHRgtCw0L0sINCc0LDRhdCw0YfQutCw0LvQsCwg0KXRg9GA0YPQutGA0LjQvdGB0LrQsNGPINGD0LvQuNGG0LAsIDExIgoNUUM-QhWszitC&source=serp_navig&z=17.1" frameborder="1" allowfullscreen="true"></iframe>
                                
                                    <div className="map-block__map__contacts">
                                        <div className="contacts__makhachkala">
                                            <h3> Город Махачкала </h3>
                                            <div className="contacts__makhachkala__numbers">
                                                <p> улица Аскерханова, 1В </p>
                                                <span className="my-1">+7 989 877 78 88 </span>
                                                <span >+7 988 777 88 87 (Дети)</span>
                                            </div>

                                            <div className="contacts__makhachkala__numbers">
                                                <p> Режим работы: </p>
                                                <span> <span className="light"> будние - </span> 08:00-20:00</span>
                                                <span>  <span className="light">выходные - </span> 09:00-19:00 </span>
                                                <span> <span className="light">последнее воскресенье месяца -   </span>  09:00-15:00    </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <div className="map-block__map">

                            <iframe className="container-fluid px-0" title="Маршала Новикова" src="https://yandex.ru/map-widget/v1/?ll=37.469334%2C55.802241&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc1NjE0ORJK0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JzQsNGA0YjQsNC70LAg0J3QvtCy0LjQutC-0LLQsCwgMTEiCg083BVCFc41X0I%2C&source=serp_navig&z=16.3" frameborder="1" allowfullscreen="true" ></iframe>
                                
                                    <div className="map-block__map__contacts">
                                        <div className="contacts__makhachkala">
                                            <h3> Город Махачкала </h3>
                                            <div className="contacts__makhachkala__numbers">
                                                <p> улица Аскерханова, 1В </p>
                                                <span className="my-1">+7 989 877 78 88 </span>
                                                <span >+7 988 777 88 87 (Дети)</span>
                                            </div>

                                            <div className="contacts__makhachkala__numbers">
                                                <p> Режим работы: </p>
                                                <span> <span className="light"> будние - </span> 08:00-20:00</span>
                                                <span>  <span className="light">выходные - </span> 09:00-19:00 </span>
                                                <span> <span className="light">последнее воскресенье месяца -   </span>  09:00-15:00    </span>
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