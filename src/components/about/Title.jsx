import { FadeInTextLeft } from "components/FadeInText"


export default function Title ({titleh1, titleh2, description1, description2}) {

    return (
        <section className="container-fluid px-0">
                <div className="title">
                    <FadeInTextLeft>
                    <h1> {titleh1} </h1>
                    <h2> {titleh2} </h2>
                    <p> {description1} </p>
                    <p> {description2} </p>
                    </FadeInTextLeft>
                </div>
        </section>
    )
}