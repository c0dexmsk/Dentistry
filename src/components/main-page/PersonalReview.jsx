import star from "../../assets/star.svg";

export default function PersonalReview ({name, starsCount, department, description, icon, iconTitle}) {

    const serviceLinks = {
        "Яндекс.Карты": "https://yandex.ru/maps/",
        "2ГИС": "https://2gis.ru/",
        "proDoctorov": "https://prodoctorov.ru/"
    };

    const handleServiceClick = (serviceName) => {
        const link = serviceLinks[serviceName];
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div className="personal-review">
            <h3> {name} </h3>
            <div className="personal-review__stars">
                {Array.from({ length: starsCount }, (_, index) => (
                    <img key={index} src={star} alt="звезда" />
                ))}
            </div>
            <p> {department} </p>
            <p> {description} </p>
            <div
            className="personal-review__place"
            onClick={() => handleServiceClick(iconTitle)}
            style={{ cursor: 'pointer' }}
            >
                <img src={icon} alt={iconTitle} />
                <span> {iconTitle} </span>
            </div>
        </div>
    )
}