import React from "react"
import { Link } from "react-router-dom";
import logoBig from "../assets/logoBig.svg";
import glasses from "../assets/glasses.svg";
import phone from "../assets/phone.svg";
import profile from "../assets/profile.svg";
import "../styles/Footer.css";

export default function Footer () {

    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__container__logo">
                    <button> 
                        <img src={logoBig} alt="logo" />
                    </button>
                </div>

                 <div className="footer__container__column1">
                    <Link to="/"> О клинике </Link>
                    <Link to="/kids"> Дети </Link>
                    <Link to="/"> Врачи </Link>
                </div>  

                <div className="footer__container__column2">
                    <Link to="/"> Кейсы </Link>
                    <select>
                        <option value="one">Услуги</option>
                        <option value="two">Two option</option>
                        <option value="two">Three option</option>
                    </select>
                    <Link to="/"> Прайс </Link>
                </div>  

                <div className="footer__container__column3">
                    <Link to="/"> Контакты </Link>
                </div>

            </div>
        </footer>
    )
}