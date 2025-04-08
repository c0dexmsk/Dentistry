import xray from "./images/rentgen-person.png";
import icon from "./images/block-icon.svg"

export default function ServicesPatternBlock ({content}) {

    return (
        <section className="container-fluid">
            <div className="pattern-block">

                <div className="container row justify-content-center align-items-center">
                    <div className="col-1">
                        <img className="pattern-block__image" src={content.guideImage} alt="Фотография врача" />
                    </div>
                    <div className="pattern-block__guide col">
                        <p> Экскурсию по отделению проводит </p>
                        <h3> {content.guideName} </h3>
                    </div>
                </div>

                <div className="row pattern-block__text mt-5">
                    <div className="col-7">
                        <h1> {content.title_H1} </h1>
                        <p> {content.description_H1} </p>
                    </div>
                    <div className="col-5">
                        <img src={xray} alt="фотография" />
                    </div>
                </div>

                <div className="row pattern-block__buttons mt-5 g-3">
                    <div className="col-md-6 col-lg-3">
                        <button> ОПИСАНИЕ УСЛУГИ </button>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <button> ИЗ ЧЕГО СОСТОИТ </button>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <button> ЦЕНЫ </button>
                    </div>
                    <div  className="col-md-6 col-lg-3">
                        <button> ВОПРОС/ОТВЕТ</button>
                    </div>
                </div>

                <div className="row align-items-center pattern-block__text block2 margin100">
                    <div className="col-5">
                        <img src={content.image} alt="фотография" />
                    </div>
                    <div className="col-7 ">
                        <h2> {content.title_H2} </h2>
                        <p> {content.description1_H2} </p>
                        <p> {content.description2_H2} </p>
                    </div>
                </div>

                <div className="margin100">
                    <h2> Важно знать </h2>
                    <div className="row mt-4 g-4">
                        <div className="col-md-12 col-lg-6">
                            <p>
                                {content.important_1}
                            </p>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <p>
                                {content.important_2}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="margin100 abilities">
                    <h2> {content.ability_H2} </h2>
                    <div className="row mt-5 g-4">

                        <div className="col-md-12 col-lg-6">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {content.ability_block1.title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.ability_block1.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {content.ability_block2.title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.ability_block2.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {content.ability_block3.title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.ability_block3.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div className="p-3">
                                <div className="row align-items-center g-4 mb-3">
                                    <div className="col-2">
                                        <img src={icon} alt="иконка" />
                                    </div>
                                    <div className="col-10">
                                        <h3> {content.ability_block4.title} </h3>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        {content.ability_block4.description}
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </section>
    )
}