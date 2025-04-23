import React from "react"
import { Link } from "react-router-dom";
import logoBig from "../../assets/logoBig.svg";
import "../../styles/general/Footer.css";
import { useMediaQuery } from "react-responsive";

export default function Footer () {

    const isDesktop = useMediaQuery ({minWidth: 768})

    return (
        <footer className="footer container-fluid px-0">
            {isDesktop ? (
                <div className="footer__container">

                <div className="footer__container__logo">
                    <Link to="/main">
                        <img src={logoBig} alt="logo" />
                    </Link>
                </div>

                 <div className="footer__container__column1">
                    <Link to="/about"> О клинике </Link>
                    <Link to="/kids"> Дети </Link>
                    <Link to="/doctors"> Врачи </Link>
                </div>

                <div className="footer__container__column2">
                    <Link to="/cases"> Кейсы </Link>
                    <select 
                        onChange={(e) => { 
                            if (e.target.value) window.location.href = e.target.value; 
                        }}
                    >
                        <option value="">Услуги</option>
                        <option value="/services/94">Гнатология</option>
                        <option value="/services/93">Детская стоматология</option>
                        <option value="/services/92">Диагностика</option>
                        <option value="/services/73">Ортодонтия</option>
                        <option value="/services/68">Ортопедия</option>
                        <option value="/services/57">Отбеливание зубов</option>
                        <option value="/services/55">Пародонтия</option>
                        <option value="/services/47">Профессиональная гигиена</option>
                        <option value="/services/12">Терапевтическая стоматология</option>
                        <option value="/services/51">Хирургия и имплантация</option>
                    </select>
                    <Link to="/price"> Прайс </Link>
                </div>

                <div className="footer__container__column3">
                    <Link to="/contacts"> Контакты </Link>
                </div>

            </div>
            ) : (
                <div className="footer__container row align-items-start">

                <div className="footer__container__logo-mobile col-12">
                    <Link to="/main">
                        <img src={logoBig} alt="logo" />
                    </Link>
                </div>

                 <div className="footer__container__column1-mobile col-6">
                    <Link to="/about"> О клинике </Link>
                    <Link to="/kids"> Дети </Link>
                    <Link to="/doctors"> Врачи </Link>
                    <Link to="/cases"> Кейсы </Link>
                </div>

                <div className="footer__container__column2-mobile col-6">
                        <select 
                                onChange={(e) => { 
                                    if (e.target.value) window.location.href = e.target.value; 
                                }}
                            >
                                <option value="">Услуги</option>
                                <option value="/services/94">Гнатология</option>
                                <option value="/services/93">Детская стоматология</option>
                                <option value="/services/92">Диагностика</option>
                                <option value="/services/73">Ортодонтия</option>
                                <option value="/services/68">Ортопедия</option>
                                <option value="/services/57">Отбеливание зубов</option>
                                <option value="/services/55">Пародонтия</option>
                                <option value="/services/47">Профессиональная гигиена</option>
                                <option value="/services/12">Терапевтическая стоматология</option>
                                <option value="/services/51">Хирургия и имплантация</option>
                            </select>
                    <Link to="/full-price"> Прайс </Link>
                    <Link to="/contacts"> Контакты </Link>
                </div>

            </div>
            )}

        </footer>
    )
}
/* Гнатология 94
Детская стоматология 93
Диагностика 92
Ортодонтия 73 
Ортопедия 68 
Отбеливание зубов 57 П
ародонтия 55
Профессиональная гигиена 47
Терапевтическая стоматология 12
Хирургия и имплантация 51 */