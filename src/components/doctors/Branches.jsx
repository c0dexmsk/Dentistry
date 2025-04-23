
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
   

    return(
        <section className="container-fluid px-0">
            <div className="doctors column">
                <h1> {Title} </h1>
                <div className="doctors__branches">
                    <h2> Отделения клиники </h2>
                    <div className="row row border-box ">
                        <button onClick={() => scrollToSection('Анестезиологи')}>Анестезиологи</button>
                        <button onClick={() => scrollToSection('Детские врачи')}>Детские врачи</button>
                        <button onClick={() => scrollToSection('Ортодонтия')}>Ортодонтия</button>
                        <button onClick={() => scrollToSection('Ортопедия')}> Ортопедия </button>
                        <button onClick={() => scrollToSection('Пародонтология')}> Пародонтология </button>
                        <button onClick={() => scrollToSection('Терапия')}> Терапия </button>
                        <button onClick={() => scrollToSection('Хирургия/имплантация')}> Хирургия / имплантация </button>
                    </div>
                </div>
            </div>
        </section>
    )
}