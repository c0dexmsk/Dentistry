
export default function DefautCard ({title, description1, description2, image, icon1, icon2, icon3, icon1Title, icon2Title, icon3Title}) {

    return (
        <div className="default-card row flex-nowrap justify-content-center">
            <div className="default-card__text col-6">

                <h2> {title} </h2>
                <p>
                    {description1}
                </p>
                <p>
                    {description2}
                </p>

                <hr />

                <div className="default-card__text__icons">
                    <div>
                        <img src={icon1} alt={icon1} />
                        <span> {icon1Title} </span>
                    </div>
                    <div>
                        <img src={icon2} alt={icon2Title} />
                        <span> {icon2Title} </span>
                    </div>
                    <div>
                        <img src={icon3} alt={icon3Title} />
                        <span> {icon3Title} </span>
                    </div>
                </div>

            </div>
            <div className="default-card__photo col-6">
                <img className="container-fluid" src={image} alt="Фотография" />
            </div>
        </div>
    )
}
