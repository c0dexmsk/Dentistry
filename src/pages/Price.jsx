import PriceBlock from "../components/price/PriceBlock.jsx";
import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import React from "react";

export default function Price() {

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                    <div>

                        <PriceBlock />

                    </div>
                <Footer />
            </div>
        </>
    )
}