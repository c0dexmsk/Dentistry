import "../../styles/general/DetailsButton.css"
import { Link } from "react-router-dom"

export default function DetailsButton ({title, link}) {
    return (
        <button className="details-button">
            <Link to={`/doctors/${link}`}> {title} </Link>
        </button>
    )
}