import React from "react"
import { Link } from "react-router-dom";
import logotype from "../../assets/logotype.png";
import "../../styles/general/Footer.css";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import Select from 'react-select';

// const serviceOptions = [
//   { value: '/services', label: 'Все услуги' },
//   { value: '/services/94', label: 'Гнатология' },
//   { value: '/services/93', label: 'Детская стоматология' },
//   { value: '/services/92', label: 'Диагностика' },
//   { value: '/services/73', label: 'Ортодонтия' },
//   { value: '/services/68', label: 'Ортопедия' },
//   { value: '/services/57', label: 'Отбеливание зубов' },
//   { value: '/services/55', label: 'Пародонтия' },
//   { value: '/services/47', label: 'Профессиональная гигиена' },
//   { value: '/services/12', label: 'Терапевтическая стоматология' },
//   { value: '/services/51', label: 'Хирургия и имплантация' }
// ];

// const customSelectStyles = {
//     control: (base) => ({
//       ...base,
//       backgroundColor: 'transparent',
//       border: 'none',
//       boxShadow: 'none',
//       minHeight: '36px',
//       cursor: 'pointer'
//     }),
//     option: (base, { isFocused, isSelected }) => ({
//       ...base,
//       backgroundColor: isSelected
//         ? '#e6d9d4'
//         : isFocused
//           ? '#f8f3f0'
//           : '#F1EBE8',
//       color: '#000',
//       padding: '8px 16px',
//       fontSize: '16px'
//     }),
//     menu: (base) => ({
//       ...base,
//       backgroundColor: '#F1EBE8',
//       width: '400px',
//       marginTop: '5px',
//       borderRadius: '4px',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
//     }),
//     menuList: (base) => ({
//       ...base,
//       padding: 0
//     }),
//     singleValue: (base) => ({
//       ...base,
//       color: '#000',
//       fontWeight: 500
//     }),
//     placeholder: (base) => ({
//       ...base,
//       color: '#000',
//       opacity: 0.7
//     }),
//     dropdownIndicator: (base) => ({
//       ...base,
//       color: '#000',
//       padding: '0 8px',
//       '&:hover': {
//         color: '#000'
//       }
//     }),
//     indicatorSeparator: () => ({
//       display: 'none'
//     })
//   };

export default function Footer () {
    const handleServiceChange = (selectedOption) => {
        if (selectedOption && selectedOption.value) {
          window.location.href = selectedOption.value;
        }
      };

    const isDesktop = useMediaQuery ({minWidth: 768})
    const navigate = useNavigate () ;

    return (
        <footer className="footer container-fluid px-0">
            {isDesktop ? (
                <div className="footer__container">

                <div className="footer__container__logo">
                    <Link to="/main">
                        <img src={logotype} alt="logo" />
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
                        <img src={logotype} alt="logo" />
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