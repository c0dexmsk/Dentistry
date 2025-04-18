import mainPhoto from "../../assets/history/zainap.png"

export default function HistoryTitle ({bitrixData}) {

    return (
        <section className="container "> 
        
            <div className="history-title column">

                <h1 className="text-center"> {bitrixData.TITLE} </h1>
                
                <div className="container-fluid px-0 row mt-5">
                    <div className="col-6">
                        <img className="img-fluid" src={bitrixData.TITLE_PHOTO} alt="Главное фото" />
                    </div>
                    <div className="col-6">
                        <h2> {bitrixData.TITLE_H2} </h2>
                        <p>
                            {bitrixData.TITLE_P}
                        </p>
                    </div>
                </div>

                
            </div>
        </section>
    )
}