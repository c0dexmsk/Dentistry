import "../../styles/general/DetailsButton.css"
import { Link } from "react-router-dom"
import { useRef } from "react";

export default function DetailsButton ({title, link}) {

    const buttonRef = useRef(null);

    const handleClick = () => {
        const link = buttonRef.current.querySelector('a');
        if (link) {
        link.click(); 
        }
    };

    return (
        <button ref={buttonRef} onClick={handleClick} className="details-button">
            <Link to={`/${link}`}> {title} </Link>
        </button>
    )
}