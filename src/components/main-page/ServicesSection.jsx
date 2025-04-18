import React from 'react';
import Service from './Service';
import Button from '../general/Button';
import tooth from '../../assets/tooth.svg';
import lamp from '../../assets/lamp.svg';
import scaler from '../../assets/dental_scaler.svg';
import loupe from '../../assets/loupe.svg';
import chair from '../../assets/dental_chair.svg';
import sciccors from '../../assets/sciccors.svg';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  // Массив с данными услуг
  const servicesData = [
    {
      title: "All-On-4",
      description: "Технология, позволяющая восстановить всю челюсть всего на 4 имплантах за один день",
      image: tooth,
      alt: "tooth"
    },
    {
      title: "Гигиена",
      description: "Бережная ультразвуковая чистка, полировка и инновационное отбеливание",
    },
    {
      title: "Виниры",
      description: "Цвет здоровья — белый. Но можно выбрать оттенок. Весь процесс оптимизирован так, чтобы вам не пришлось долго ждать именно того результата, на который вы рассчитываете",
      image: lamp,
      alt: "lamp"
    },
    {
        title: "Брекеты-невидимки",
        description: "Выпрямление зубов с помощью прозрачных брекетов без дискомфорта от металлических элементов на зубах",
        image: scaler,
        alt: "Брекеты-невидимки"
    },
    {
        title: "Эндодонтия",
        description: "Все терапевтические услуги проводятся исключительно под микроскопом с линзами мирового уровня врачами высшей категории",
        image: loupe,
        alt: "Лупа"
    },
    {
        title: "Лечение во сне",
        description: "Особенно актуально для детей. Седация закисью азота или общий наркоз Севоран — все, чтобы лечение прошло незаметно",
        image: chair,
        alt: "Хирургический стул"
    },
    {
        title: "Прикус",
        description: "Элайнеры, брекеты и все виды сложных конструкций производства собственной зуботехнической лаборатории",
    },
    {
        title: "Хирургия",
        description: "Все виды челюстно-лицевых и лоскутных операций, удаление зубов и кист",
        image: sciccors,
        alt: "Хирургические ножницы"
    },
  ];

  return (
    <section className="service container-fluid px-0">

      <div>
        <h2>Услуги</h2>

        <div className="service-flex">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              alt={service.alt}
            />
          ))}
        </div>

        <div className='service__button-container'>
            <Button> <Link to="/services">Все Услуги </Link> </Button>
        </div>

      </div>

      {}
    </section>
  );
};

export default ServicesSection;