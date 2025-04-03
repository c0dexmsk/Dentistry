import star from "../assets/star.svg";

export default function PersonalReview ({name, starsCount, department, description, icon, iconTitle}) {

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
            <div className="personal-review__place">
                <img src={icon} alt={iconTitle} />
                <span> {iconTitle} </span>
            </div>
        </div>
    )
}