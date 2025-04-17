
import faq from "../../assets/FAQ.svg"
import FAQDropdown from "./FAQDropdown";
import Accordion from 'react-bootstrap/Accordion';
import withBitrixData from "hocs/withBitrixData";

 function FAQ({bitrixData}) { 
    
    const FAQDescription = [
        {
            // title: 'Как вы обеспечиваете безопасность лечения в вашей клинике?',
            title:  bitrixData.QUESTIONS[0].question,
            description: bitrixData.QUESTIONS[0].answer,
            eventKey: "0",
        },
        {
            title:  bitrixData.QUESTIONS[1].question,
            description: bitrixData.QUESTIONS[1].answer,
            eventKey: "1"
        },
        {
            title:  bitrixData.QUESTIONS[2].question,
            description: bitrixData.QUESTIONS[2].answer,
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


export default withBitrixData(FAQ);