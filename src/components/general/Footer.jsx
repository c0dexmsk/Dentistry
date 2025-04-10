import React from "react"
import { Link } from "react-router-dom";
import logoBig from "../../assets/logoBig.svg";
import "../../styles/general/Footer.css";

export default function Footer () {

    return (
        <footer className="footer container-fluid">
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
                    <Link to="/"> Контакты </Link>
                </div>

            </div>
        </footer>
    )
}