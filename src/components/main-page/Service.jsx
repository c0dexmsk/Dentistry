import "../../styles/main-page/Service.css"

export default function Service ({title, description, image, alt}) {

    return (
        <div className="service__card">
            {image && <img src={image} alt={alt} />}
            <h3>
               {title}   
            </h3>
            <p>
                {description}
            </p>
        </div>
    )
}