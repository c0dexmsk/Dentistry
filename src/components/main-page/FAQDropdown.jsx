import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import plus from "../../assets/plus.svg";

export default function FAQDropdown ({title, description, eventKey}) {

    return (
        <>
            <Accordion.Item eventKey={eventKey} className="FAQ__dropdown">
                <Accordion.Header className="FAQ__dropdown__header">
                    <div>
                        {title}
                        <img src={plus} alt="плюс" className="FAQ__dropdown-icon" />
                    </div>
                </Accordion.Header>
                    <Accordion.Body className="FAQ__dropdown__body">
                        <div className="FAQ__dropdown__content">
                            {description}
                        </div>
                    </Accordion.Body>
            </Accordion.Item>
            {/* <div className="FAQ__dropdown">
                <details name="faq">
                    <summary className="details__title"> {title}</summary>
                    <p className="details__content">{description}</p>
                </details>
            </div> */}

        </>
    )
}