import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import React from "react";

import HistoryTitle from "../components/history/HistoryTitle.jsx";
import Diagnostics from "../components/history/Diagnostics.jsx";
import Stages  from "../components/history/Stages.jsx";
import Result from "../components/history/Result.jsx";
import Team from "../components/history/Team.jsx";

export default function MainPage() {

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                <div>

                    <HistoryTitle />
                    <Diagnostics />
                    <Stages />
                    <Result />
                    <Team />

                </div>
                <Footer />
            </div>
        </>
    )
}