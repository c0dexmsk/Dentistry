
import withBitrixData from "hocs/withBitrixData"
import image from "./abc.png"

import image2 from "./виниры1.png"
import image3 from "./виниры2.png"

function Veneers({bitrixData}) {

    return (
        <>
            <section className="container-fluid px-0 ">
                <div className="veneers">
                    <h2> {bitrixData.VTITLE1}</h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p>
                                {bitrixData.VDESC1}
                            </p>
                            <a href={bitrixData.CASELINK} >
                                {bitrixData.CASE}
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img className="container-fluid custom-img" src={image} alt="виниры" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid px-0 ">
            <h2 className="d-block d-md-none"> {bitrixData.VTITLE2}</h2>
                <div className="veneers v2">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <img className="container-fluid col-6" src={image2} alt="фото 1" />
                                <img className="container-fluid col-6" src={image3} alt="фото 2" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                        <h2 className="d-none    d-md-block"> {bitrixData.VTITLE2}</h2>
                            <p>
                                {bitrixData.VDESC2}
                            </p>
                            <a href={bitrixData.CASELINK} >
                                Подробнее
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default withBitrixData(Veneers);