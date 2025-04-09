import PersonalExperience from "../components/main-page/PersonalExperience.jsx";
import DepartmentSection from "../components/main-page/DepartmentSection.jsx";
import ServicesSection from "../components/main-page/ServicesSection.jsx";
import MainPageSwiper from "../components/main-page/MainPageSwiper.jsx";
import Contacts from "../components/main-page/Contacts.jsx";
import Metrics from "../components/main-page/Metrics.jsx";
import Recovery from "../components/main-page/Recovery.jsx";
import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import FAQ from "../components/main-page/FAQ.jsx";
import React from "react";

export default function MainPage() {

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                <div>

                    <MainPageSwiper/ >

                    <Metrics />
                    <ServicesSection />
                    <DepartmentSection />
                    <Recovery />
                    <PersonalExperience />
                    <FAQ />
                    <Contacts />

                </div>
                <Footer />
            </div>
        </>
    )
}