
import videoPlay from "../../assets/video_play.svg";
import "../../styles/about/Video.css";

export default function Video () {
    return (
        <section className="container">
            <div className="video">
                <button>
                    <img src={videoPlay} alt="Видео кнопка" />
                </button>
            </div>
        </section>
    )
}