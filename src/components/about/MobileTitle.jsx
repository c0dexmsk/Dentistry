import videoPlay from "../../assets/video_play.svg";
import { useState } from "react";

export default function MobileTitle ({titleh1, titleh2, description1, description2}) {

    const [hideText, setHideText] = useState(true);

    return (
        <>
            <section className="container">
                <div className="title">
                    <h1> {titleh1} </h1>
                    <h2> {titleh2} </h2>
                </div>
            </section>

            <section className="container-fluid p-0">
                <div className="video">
                    <button>
                        <img src={videoPlay} alt="Видео кнопка" />
                    </button>
                </div>
            </section>  

            <section className="container">
                <div className="title align-items-start">
                    <p> {description1} </p>

                    <button className="mb-3" onClick={() => (setHideText(!hideText))}> {hideText? ("Показать весь текст"): ("Скрыть текст") } </button>
                    
                    {hideText ? (
                        null
                    ) : (
                        <p> {description2} </p>
                    )}
                    
                </div>
            </section>
        </>
    )   
}