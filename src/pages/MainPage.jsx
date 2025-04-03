import PersonalExperience from "../components/PersonalExperience.jsx";
import DepartmentSection from "../components/DepartmentSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import MainPageSwiper from "../components/MainPageSwiper.jsx";
import Contacts from "../components/Contacts.jsx";
import Metrics from "../components/Metrics.jsx";
import Recovery from "../components/Recovery";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ.jsx";
import "../styles/MainPage.css";
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