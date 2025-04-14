
import faq from "../../assets/FAQ.svg"
import FAQDropdown from "./FAQDropdown";
import Accordion from 'react-bootstrap/Accordion';

export default function FAQ() {

    const FAQDescription = [
        {
            title: 'Как вы обеспечиваете безопасность лечения в вашей клинике?',
            description: 'Безопасность – наш приоритет. Мы используем многоступенчатую стерилизацию: дезинфекция, очистка и автоклавирование инструментов под высоким давлением (134°C). Контролируем каждый этап. ',
            eventKey: "0",
        },
        {
            title: 'Что делать с зубами мудрости: удалять или можно оставить?',
            description: 'Удалять или оставить зуб мудрости решает врач после осмотра и снимка. Рекомендуем удаление при неправильном росте, воспалении, кариесе или нехватке места. Если зуб не беспокоит, можно оставить его под наблюдением. ',
            eventKey: "1"
        },
        {
            title: 'Что делать, если ребенку выбили зуб? ',
            description: 'При выбитом зубе нужно действовать быстро. Найдите зуб, держите его за коронку. Промойте холодной водой (не трите). Если зуб постоянный, попробуйте вернуть в лунку, либо поместите в молоко/физраствор. — и срочно к стоматологу. В первые 30 минут шансы спасти зуб выше.',
            eventKey: "2",
        },
    ]

    return (
        <section className="container-fluid">
                <div className="FAQ">
                    <div>
                        <div>
                            <h2> FAQ </h2>
                            <img src={faq} alt="Ответы на вопросы" />
                        </div>
                        <p> Ответы на популярные вопросы </p>
                    </div>
                    <div>
                    <Accordion>
                        {FAQDescription.map((el, index) => {
                            return (
                                <>
                                    <FAQDropdown
                                        title={el.title}
                                        description={el.description}
                                        eventKey={el.eventKey}
                                        key={index}
                                    />
                                </>
                            )
                        })}
                    </Accordion >

                    </div>
                </div>
        </section>
    )
}