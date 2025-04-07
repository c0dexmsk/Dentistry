import "../../styles/about/Title.css"

export default function Title ({titleh1, titleh2, description1, description2}) {

    return (
        <section className="container container">
            <div className="title">
                <h1> {titleh1} </h1>
                <h2> {titleh2} </h2>
                <p> {description1} </p>
                <p> {description2} </p>
            </div>
        </section>
    )
}