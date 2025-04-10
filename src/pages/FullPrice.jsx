import PriceList from "../components/price/PriceList.jsx";
import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import React from "react";

export default function FullPrice() {

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                    <div>

                        <PriceList />

                    </div>
                <Footer />
            </div>
        </>
    )
}