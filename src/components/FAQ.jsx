
import faq from "../assets/FAQ.svg"
import FAQDropdown from "./FAQDropdown";
import "../styles/FAQ.css";

export default function FAQ() {

    const FAQDescription = [
        {
            title: 'Как вы обеспечиваете безопасность лечения в вашей клинике?',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cupiditate.'
        },
        {
            title: 'Что делать с зубами мудрости: удалять или можно оставить?',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cupiditate.'
        },
        {
            title: 'Что делать, если ребенку выбили зуб? ',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cupiditate.'
        },
    ]
    
    return (
        <section>
                <div className="FAQ">
                    <div>
                        <div>
                            <h2> FAQ </h2>
                            <img src={faq} alt="Ответы на вопросы" />
                        </div>
                        <p> Ответы на популярные вопросы </p>
                    </div>
                    <div>
                        {FAQDescription.map((el, index) => {
                            return (
                                <>
                                    <FAQDropdown
                                        title={el.title}
                                        description={el.description}
                                    />
                                </>
                            )
                        })}
                        
                    </div>
                </div>
        </section>
    )
}