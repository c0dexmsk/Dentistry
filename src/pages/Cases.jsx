import withBitrixCasesData from "hocs/withBitrixCasesData.js";
import Header from "../components/general/Header.jsx";
import Footer from "../components/general/Footer.jsx";
import "../styles/cases/Cases.css";
import Case from "../components/cases/Case.jsx";
import Zainap from "../assets/ZainapHistory.png"

function Cases({bitrixData: casesList}) {

    // const casesList = [
    //     {
    //         name: 'История Зайнап',
    //         image: Zainap,
    //         description: "Функциональность и красота: полная трансформация улыбки пациента",
    //     }
    // ]

    return (
        <>
            <div id="main-page-wrapper">
                <Header />
                <section>
                    <div className="cases column">

                        <h1 className="text-center"> Кейсы </h1>
                        <h2> Ортопедия </h2>

                        <section className="case-section container-fluid px-0">
                            <div className="cases">
                                {casesList.map((el,index) => {
                                    return (
                                        <Case
                                            name={el.name}
                                            image={el.image}
                                            description={el.description}
                                        />
                                    )
                                })}
                            </div>
                        </section>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default withBitrixCasesData(Cases)