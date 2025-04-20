import { useMediaQuery } from "react-responsive"

export default function Service ({title, description, image, alt, id}) {

    const isDesktop = useMediaQuery({ minWidth: 768 });
    console.log(id);


    return isDesktop ? (
            <div className="service__card">
            {image && <img src={image} alt={alt} />}
            <h3>
               {title}
            </h3>
            <p>
                {description}
            </p>
        </div>
        ) : (
            <div className={(id==4||id==3) ? "col-6" : "col-4"} >
            <div className="service__card__mobile">
                {image && <img src={image} alt={alt} />}
                <h3>
                {title}
                </h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}