
export default function Branches () {

    return( 
        <section>
            <div className="doctors column">
                <h1> Врачи </h1>
                <div className="doctors__branches">
                    <h2> Отделения клиники </h2>
                    <div className="row p-0 row border-box">
                        <button> Анестезиологи </button>
                        <button> Детские врачи </button>
                        <button> Ортодонтия </button>
                        <button> Ортопедия </button>
                        <button> Пародонтология </button>
                        <button> Хирургия / имплантация </button>
                        <button> Терапия </button>
                    </div>
                </div>
            </div>
        </section>
    )
}