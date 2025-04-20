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
                    <select>
                        <option value="one">Услуги</option>
                        <option value="two">Two option</option>
                        <option value="two">Three option</option>
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
                    <select>
                        <option value="one">Услуги</option>
                        <option value="two">Two option</option>
                        <option value="two">Three option</option>
                    </select>
                    <Link to="/price"> Прайс </Link>
                    <Link to="/contacts"> Контакты </Link>
                </div>

            </div>
            )}

        </footer>
    )
}