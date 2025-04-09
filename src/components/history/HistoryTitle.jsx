import mainPhoto from "../../assets/history/zainap.png"

export default function HistoryTitle () {

    return (
        <section className="container "> 
        
            <div className="history-title column">

                <h1 className="text-center"> История Зайнап </h1>
                
                <div className="container-fluid row mt-5">
                    <div className="col-6">
                        <img className="img-fluid" src={mainPhoto} alt="Главное фото" />
                    </div>
                    <div className="col-6">
                        <h2> От задумки к совершенству </h2>
                        <p>
                            Зайнап обратилась в клинику с жалобами
                            на несостоятельные коронки, воспаление десны
                            в их области, неудовлетворительную эстетику зубов и выраженные разрушения зубов в области жевательных групп.
                        </p>
                        <p>
                            После сбора анамнеза и осмотра полости рта пациентка была направлена на диагностику.
                        </p>
                    </div>
                </div>

                
            </div>
        </section>
    )
}