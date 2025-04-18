
import videoPlay from "../../assets/video_play.svg";

export default function Video () {
    return (
        <section className="container-fluid px-0 p-0">
            <div className="video">
                <button>
                    <img src={videoPlay} alt="Видео кнопка" />
                </button>
            </div>
        </section>
    )
}