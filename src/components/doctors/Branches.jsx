
export default function Branches ({Title}) {

    return(
        <section className="container-fluid px-0">
            <div className="doctors column">
                <h1> {Title} </h1>
                <div className="doctors__branches">
                    <h2> Отделения клиники </h2>
                    <div className="row row border-box ">
                        <button> Анестезиологи </button>
                        <button> Детские врачи </button>
                        <button> Ортодонтия </button>
                        <button> Ортопедия </button>
                        <button> Пародонтология </button>
                        <button> Терапия </button>
                        <button> Хирургия / имплантация </button>
                    </div>
                </div>
            </div>
        </section>
    )
}