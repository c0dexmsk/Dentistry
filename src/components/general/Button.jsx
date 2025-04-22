import "../../styles/general/Button.css";
import { useRef } from "react";
import React from "react";

export default function Button (props) {
    const buttonRef = useRef(null);

    const handleClick = () => {
      const link = buttonRef.current.querySelector('a');
      if (link) {
        link.click(); // Программно кликаем по ссылке
      }
    };

    return (
        <button ref={buttonRef} onClick={handleClick} className="button">
            {props.children}
        </button>
    )
}