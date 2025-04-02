import PersonalExperience from "../components/PersonalExperience.jsx";
import DepartmentSection from "../components/DepartmentSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import MainPageSwiper from "../components/MainPageSwiper.jsx";
import Metrics from "../components/Metrics.jsx";
import Recovery from "../components/Recovery";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import tooth from "../assets/tooth.svg";
import "../styles/MainPage.css";
import React from "react";

export default function MainPage() {

    // const servicesData = [
    //     {
    //       title: "All-On-4",
    //       description: "Технология, позволяющая восстановить всю челюсть всего на 4 имплантах за один день",
    //       image: tooth,
    //       alt: "tooth"
    //     },
    //     {
    //       title: "Имплантация",
    //       description: "Современные методы установки зубных имплантов",
    //       image: tooth,
    //       alt: "tooth"
    //     },
    //     {
    //       title: "Отбеливание",
    //       description: "Профессиональное отбеливание зубов без вреда для эмали",
    //       image: tooth,
    //       alt: "tooth"
    //     },
    
    //  ];

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
                    

                </div>
                <Footer />
            </div>
        </>
    )
}