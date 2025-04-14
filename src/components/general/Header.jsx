import React , { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import glasses from "../../assets/glasses.svg";
import phone from "../../assets/phone.svg";
import profile from "../../assets/profile.svg";
import "../../styles/general/Header.css";
import { useMediaQuery } from 'react-responsive';

export default function Header () {

    const isDesktop = useMediaQuery({ minWidth: 760 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return isDesktop ? (

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
                        <Link to="/contacts"> Контакты </Link>
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
        ) : ( 
            <header className="header">
                <div className="header__container">

                    <div className="header__container__logo">
                        <Link to="/main">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="header__container__burger">
                    <button 
                        className={`burger-button ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </button>
                    </div>

                    {isMenuOpen && (
                    <div className="mobile-menu d-flex flex-column">
                        
                        <div className="mobile-menu__container d-flex flex-row justify-content-between align-items-center">
                            <img src={logo} alt="logo" />
                            <button 
                                className="mobile-menu__close"
                                onClick={() => setIsMenuOpen(false)}
                                >
                                &times; 
                            </button>
                        </div>

                        <div className="mobile-menu__links">
                            <Link to="/about"> О клинике </Link>
                            <Link to="/kids"> Дети </Link>
                            <Link to="/doctors"> Врачи </Link>
                            <Link to="/cases"> Кейсы </Link>
                            <Link to="/services"> Услуги </Link>
                            <Link to="/price"> Прайс </Link>
                            <Link to="/contacts"> Контакты </Link>
                            <Link to="/"> Записаться </Link>
                        </div>
                    </div>
                    )}

                </div>
            </header>
    );
}