
export default function Branches ({Title}) {

    const scrollToSection = (sectionName) => {
    const headers = Array.from(document.querySelectorAll('h2'));

    const targetHeader = headers.find(header =>
        header.textContent.trim().toLowerCase() === sectionName.trim().toLowerCase()
    );

    if (targetHeader) {
        targetHeader.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    }}
   console.log(Title);


    return(
        <section className="container-fluid px-0">
            <div className="doctors column">
                <h1> {Title} </h1>
                <div className="doctors__branches">
                    <h2> Отделения клиники </h2>
                    <div className={ (Title != "Услуги") ? "row border-box"  :"row border-box justify-content-center justify-content-md-between"}>
                        {(Title == "Услуги") ? (
                            <>
                                <button onClick={() => scrollToSection('Консультация и диагностика')}>Консультация и диагностика</button>
                                <button onClick={() => scrollToSection('Профилактика')}>Профилактика</button>
                                <button onClick={() => scrollToSection('Терапия')}>Терапия</button>
                                <button onClick={() => scrollToSection('Ортопедия')}> Ортопедия </button>
                                <button onClick={() => scrollToSection('Ортодонтия')}> Ортодонтия </button>
                                <button onClick={() => scrollToSection('Хирургия')}> Хирургия </button>
                                <button onClick={() => scrollToSection('Имплантация')}> Имплантация </button>
                                <button onClick={() => scrollToSection('Пародонтология')}> Пародонтология </button>
                                <button onClick={() => scrollToSection('Гнатология')}> Гнатология </button>
                                <button onClick={() => scrollToSection('Детская стоматология')}> Детская стоматология </button>
                            </>
                        ) : (
                        <>
                            <button onClick={() => scrollToSection('Анестезиологи')}>Анестезиологи</button>
                            <button onClick={() => scrollToSection('Детские врачи')}>Детские врачи</button>
                            <button onClick={() => scrollToSection('Ортодонтия')}>Ортодонтия</button>
                            <button onClick={() => scrollToSection('Ортопедия')}> Ортопедия </button>
                            <button onClick={() => scrollToSection('Пародонтология')}> Пародонтология </button>
                            <button onClick={() => scrollToSection('Терапия')}> Терапия </button>
                            <button onClick={() => scrollToSection('Хирургия/имплантация')}> Хирургия / имплантация </button>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}