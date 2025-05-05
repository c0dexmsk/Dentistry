
import withBitrixData from "hocs/withBitrixData"
import image from "./abc.png"
import image2 from "./виниры1.png"
import image3 from "./виниры2.png"
import image4 from "assets/veneers.png"
import image5 from "assets/veneers2.png"
import { useMediaQuery } from "react-responsive"
import{ FadeInTextRight } from "components/FadeInText"

function Veneers({bitrixData}) {

    const isDesktop = useMediaQuery({minWidth: 768})

    return (
        <>
            <section className="container-fluid px-0 veneers_container">
                <div className="veneers">
                    <h2 className="mb-md-2 mb-3"> {bitrixData.VTITLE1}</h2>
                    <div className="d-block d-md-none hidden-block" >
                    <img className="container-fluid custom-img" src={isDesktop? bitrixData.PHOTO1 : image4} alt="виниры" />
                    </div>
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
                            <img className="d-none d-md-block container-fluid custom-img" src={bitrixData.PHOTO1} alt="виниры" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid px-0 veneers_container">
                <div className="veneers v2">
                    <FadeInTextRight>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <img className="container-fluid col-6" src={image2} alt="фото 1" />
                                <img className="container-fluid col-6" src={image3} alt="фото 2" />
                            </div>
                        <h2 className="mt-3 mb-0 d-block d-md-none"> {bitrixData.VTITLE2}</h2>
                        </div>
                        <div className="col-lg-5 col-md-12 VTITLE2">
                            <h2 className="d-none d-md-block"> {bitrixData.VTITLE2}</h2>
                            <p>
                                {bitrixData.VDESC2}
                            </p>
                            <a href={bitrixData.CASELINK} >
                                Подробнее
                            </a>
                        </div>
                    </div>
                    </FadeInTextRight>
                </div>
            </section>
        </>
    )
}
export default withBitrixData(Veneers);