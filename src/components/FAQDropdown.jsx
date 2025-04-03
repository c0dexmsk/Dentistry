

export default function FAQDropdown ({title, description}) {

    return (
        <>  
            <div className="FAQ__dropdown">
                <details name="faq">
                    <summary className="details__title"> {title}</summary>
                    <p className="details__content">{description}</p>
                </details>
            </div>
        </>
    )
}