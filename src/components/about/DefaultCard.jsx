
export default function DefautCard ({title, description1, description2, image, icon1, icon2, icon3, icon1Title, icon2Title, icon3Title}) {

    return (
        <div className="default-card">
            <div className="default-card__text">

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
            <div className="default-card__photo">
                <img src={image} alt="Фотография" />
            </div>
        </div>
    )
}
