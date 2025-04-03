import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import glasses from "../../assets/glasses.svg";
import phone from "../../assets/phone.svg";
import profile from "../../assets/profile.svg";
import "../../styles/general/Header.css";

export default function Header () {

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__container__logo">
                    <button> 
                        <img src={logo} alt="logo" />
                    </button>
                </div>

                <div className="header__container__text">
                    <Link to="/"> О клинике </Link>
                    <Link to="/kids"> Дети </Link>
                    <Link to="/"> Врачи </Link>
                    <Link to="/"> Кейсы </Link>
                    <select>
                        <option value="one">Услуги</option>
                        <option value="two">Two option</option>
                        <option value="two">Three option</option>
                    </select>
                    <Link to="/"> Прайс </Link>
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