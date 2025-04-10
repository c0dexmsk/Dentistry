import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import glasses from "../../assets/glasses.svg";
import phone from "../../assets/phone.svg";
import profile from "../../assets/profile.svg";
import "../../styles/general/Header.css";

export default function Header () {

    return (
        <header className="header container-fluid">
            <div className="header__container">
                <div className="header__container__logo">
                    <Link to="/main">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="header__container__text">
                    <Link to="/about"> О клинике </Link>
                    <Link to="/kids"> Дети </Link>
                    <Link to="/doctors"> Врачи </Link>
                    <Link to="/cases"> Кейсы </Link>
                    <select>
                        <option value="one">Услуги</option>
                        <option value="two">Two option</option>
                        <option value="two">Three option</option>
                    </select>
                    <Link to="/price"> Прайс </Link>
                    <Link to="/"> Контакты </Link>
                    <Link to="/"> Записаться </Link>
                </div>

                <div className="header__container__icons">
                    <button>
                        <img src={glasses} alt="glasses" />
                    </button>
                    <button>
                        <img src={phone} alt="phone" />
                    </button>
                    <button>
                        <img src={profile} alt="profile" />
                    </button>
                </div>
            </div>
        </header>
    )
}