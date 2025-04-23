
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom"

export default function Item ({title, backgroundColor, link,description,innerServices}) {

    const styles = {
        brown: {
            color1: '#D6D0C2',
            color2: 'white',
            color3: '#2E2E2E',
            color4: "white",
            color5: "black"
        },
        blue: {
            color1: '#576D8D',
            color2: '#B5D2F4',
            color3 :'#B5D2F4',
            color4: 'black',
            color5: "white"
        },
      };

    const selectedStyle = styles[backgroundColor] || {};

    const isDesktop = useMediaQuery ({minWidth : 768});

    return (
        <>
            <div className="item-01 col-12 col-md-5 my-md-3"
            style={{ backgroundColor: selectedStyle.color2, }}>
                <div className="row gy-3 item">
                    <div className="special1 col-8 col-md-12">
                        <h3> {title} </h3>
                        <p> {description} </p>
                    </div>
                    <div className="special2 col-3 col-md-12 ">
                        <Link style={{
                        '--color4': selectedStyle.color4,
                        '--color5': selectedStyle.color5
                        }} to={`/services${link}`}> Об отделении </Link>
                        <Link style={{
                            '--color4': selectedStyle.color4,
                            '--color5': selectedStyle.color5
                        }} to={`/services${link}`}> Все услуги </Link>
                    </div>
                </div>
            </div>
            <div className="item-02 col-12 col-md-7 my-md-3 row gx-3"
            style={{ backgroundColor: selectedStyle.color1, }}>
                {innerServices.map ((el,index) => {
                    return (
                        <div className="col-6 h-100 d-flex flex-column">
                            <div className="w-100 h-100 d-flex flex-column align-items-start">
                                <h3> {el.title} </h3>
                                <p> {el.description} </p>
                                {/* <Link to={`/${link}`}> Подробнее </Link> */}
                            </div>
                                {/* { index===1 ? <Link style={{ backgroundColor: selectedStyle.color3, color: selectedStyle.color4 }} to="/services" className="big-link w-100 text-center mt-4 d-flex justify-content-center align-items-center"> Все услуги </Link> : null} */}
                        </div>
                    )
                })}
            </div>
        </>
    )
}