
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FadeInTextLeft } from "components/FadeInText";


export default function DefautCard ({title, description1, description2, image, icon1, icon2, icon3, icon1Title, icon2Title, icon3Title, children}) {

    const isDesktop = useMediaQuery({ minWidth: 768 });
    const [hideText, setHideText] = useState(true);

    return isDesktop ? (
        <div className="default-card row flex-nowrap justify-content-center">
            <div className="default-card__text px-0 col">
                <FadeInTextLeft>
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

                {children && <div className="card-children">{children}</div>}

                </FadeInTextLeft>
            </div>
            <div className="default-card__photo px-0 col">
                <FadeInTextLeft>
                    <img className="container-fluid px-0 px-0" src={image} alt="Фотография" />
                </FadeInTextLeft>
            </div>
        </div>

    ) : (

        <div className="default-card d-flex flex-column justify-content-center">

            <div className="default-card__text">

                <h2> {title} </h2>

            </div>

            <div className="default-card__photo">
                <img className="container-fluid px-0 p-0" src={image} alt="Фотография" />
            </div>

            <div className="default-card__text">

                <p>
                    {description1}
                </p>

                <button className="mb-3" style={{textAlign: "left", fontWeight: "300"}} onClick={() => (setHideText(!hideText))}> {hideText? ("Показать весь текст"): ("Скрыть текст") } </button>

                {hideText ? (
                    null
                ) : (
                    <p> {description2} </p>
                )}

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
                {children && <div className="card-children">{children}</div>}

            </div>
        </div>
    )
}
