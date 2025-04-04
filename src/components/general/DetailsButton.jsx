import "../../styles/general/DetailsButton.css"


export default function DetailsButton (props) {
    return (
        <button className="details-button">
            {props.children}
        </button>
    )
}