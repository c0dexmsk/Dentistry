import React , { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import logo from "../../assets/logotype.png";
import bigLogo from "assets/logotype.png"
import glasses from "../../assets/glasses.svg";
import phone from "../../assets/phone.svg";
import profile from "../../assets/profile.svg";
import "../../styles/general/Header.css";
import { useMediaQuery } from 'react-responsive';

export default function Header () {

    const isDesktop = useMediaQuery({ minWidth: 768 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className={`header ${isDesktop ? 'container-fluid px-0' : ''}`}>
            <div className="header__container">
                <div className="header__container__logo">
                    <Link to="/main">
                        <img src={bigLogo} alt="logo" />
                    </Link>
                </div>

                {isDesktop ? (
                    <>
                        <div className="header__container__text">
                            <Link to="/about">О клинике</Link>
                            <Link to="/kids">Дети</Link>
                            <Link to="/doctors">Врачи</Link>
                            <Link to="/cases">Кейсы</Link>
                            <select
                                onChange={(e) => {
                                    if (e.target.value) window.location.href = e.target.value;
                                }}
                            >
                                <option value="">Услуги</option>
                                <option value="/services">Все услуги</option>
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
                            <Link to="/price">Прайс</Link>
                            <Link to="/contacts">Контакты</Link>
                            <Link onClick={() => {
                                setIsMenuOpen(false);
                                setIsPhoneMenuOpen(true);
                            }} >Записаться</Link>
                        </div>

                        <div className="header__container__icons">
                            <button>
                                <img src={glasses} alt="glasses" />
                            </button>
                            <button onClick={() => setIsPhoneMenuOpen(true)}>
                                <img src={phone} alt="phone" />
                            </button>
                            <button>
                                <img src={profile} alt="profile" />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
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
                                    <a href="/main"><img style={{maxWidth: "20%"}} src={logo} alt="logo" /></a>
                                    <button
                                        className="mobile-menu__close"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        &times;
                                    </button>
                                </div>

                                <div className="mobile-menu__links">
                                    <Link to="/about">О клинике</Link>
                                    <Link to="/kids">Дети</Link>
                                    <Link to="/doctors">Врачи</Link>
                                    <Link to="/cases">Кейсы</Link>
                                    <Link to="/services">Услуги</Link>
                                    <Link to="/full-price">Прайс</Link>
                                    <Link to="/contacts">Контакты</Link>
                                    <Link onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsPhoneMenuOpen(true);
                                    }} to="#">Записаться</Link>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Общее модальное окно для обеих версий */}
            {isPhoneMenuOpen && (
                <div className={`phone-menu ${isDesktop ? 'desktop' : 'mobile'}`}>
                    <div className="phone-menu__content">
                        <div className="phone-menu__header">
                            <h3>Записаться на прием</h3>
                            <button
                                className="phone-menu__close"
                                onClick={() => setIsPhoneMenuOpen(false)}
                            >
                                &times;
                            </button>
                        </div>

                        <form className="phone-menu__form">
                            <input type="text" placeholder="Ваше имя" required />
                            <input type="tel" placeholder="Контактный телефон" required />
                            <textarea placeholder="Комментарий (например, желаемая дата, время):"></textarea>

                            <label className="phone-menu__agreement">
                                <input type="checkbox" required />
                                <span>Согласен на обработку персональных данных</span>
                            </label>

                            <button type="submit" className="phone-menu__submit">
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
}