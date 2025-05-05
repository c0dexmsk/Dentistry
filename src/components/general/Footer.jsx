import React from "react"
import { Link } from "react-router-dom";
import logotype from "../../assets/logotype.png";
import "../../styles/general/Footer.css";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { HashLink as Link1 } from 'react-router-hash-link';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        minHeight: 'auto',
        cursor: 'pointer'
      }),
      valueContainer: (provided) => ({
        ...provided,
        padding: 0
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        padding: 0,
        color: 'inherit'
      }),
      indicatorSeparator: () => ({
        display: 'none'
      }),
      menu: (provided) => ({
        ...provided,
        width: '250%',
        backgroundColor: '#F1EBE8'
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#E8DFD8' : '#F1EBE8',
        color: '#333',
        padding: '12px 16px',
        fontSize: '16px'
      }),
      singleValue: (provided) => ({
        ...provided,
        color: 'inherit',
        margin: 0,
        fontSize: '16px'
      })
  };

  const ServiceSelect = () => {
    const options = [
        { value: '', label: 'Услуги' },
        { value: '/services', label: 'Все услуги' },
        { value: '/services/94', label: 'Гнатология' },
        { value: '/services/93', label: 'Детская стоматология' },
        { value: '/services/92', label: 'Диагностика' },
        { value: '/services/73', label: 'Ортодонтия' },
        { value: '/services/68', label: 'Ортопедия' },
        { value: '/services/57', label: 'Отбеливание зубов' },
        { value: '/services/55', label: 'Пародонтология' },
        { value: '/services/47', label: 'Профессиональная гигиена' },
        { value: '/services/12', label: 'Терапевтическая стоматология' },
        { value: '/services/51', label: 'Хирургия и имплантация' }
      ];

    return (
      <Select
        options={options}
        styles={customStyles}
        onChange={(selectedOption) => {
          if (selectedOption.value) {
            window.location.href = selectedOption.value;
          }
        }}
        defaultValue={options[0]}
      />
    );
  };
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
                    {/* <select
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
                        <option value="/services/55">Пародонтология</option>
                        <option value="/services/47">Профессиональная гигиена</option>
                        <option value="/services/12">Терапевтическая стоматология</option>
                        <option value="/services/51">Хирургия и имплантация</option>
                    </select> */}
                    <ServiceSelect />
                    <Link to="/price"> Прайс </Link>
                </div>

                <div className="footer__container__column3">
                    <Link to="/contacts"> Контакты </Link>
                    <Link1 smooth to="#headerLink"> Наверх </Link1>
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
                        {/* <select
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
                                <option value="/services/55">Пародонтология</option>
                                <option value="/services/47">Профессиональная гигиена</option>
                                <option value="/services/12">Терапевтическая стоматология</option>
                                <option value="/services/51">Хирургия и имплантация</option>
                            </select> */}
                            <ServiceSelect />
                    <Link to="/full-price"> Прайс </Link>
                    <Link to="/contacts"> Наши филиалы</Link>
                    <Link1 smooth to="#headerLink"> Наверх </Link1>
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