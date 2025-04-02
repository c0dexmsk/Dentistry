import "../styles/PersonalExperience.css";
import Review from "./Review";
import React from "react";

export default function PersonalExperience() {

    return (
        <>
            <section>
                <div className="experience">
                    <h2>
                        Личный опыт
                    </h2>
                    <p>
                    Узнайте, что думают о нас те, кто уже доверил нам свою улыбку. Реальные истории пациентов Bego.
                    </p>

                    <Review />
                </div>

            </section>
        </>
    )
}