import withBitrixPriceListData from "hocs/withBitrixPriceListData";

function PriceList ({bitrixData}) {


    //console.log('Получаемые данные: ',bitrixData);
    const departments = bitrixData;
    const uniqueDepartments = Array.from(new Set(bitrixData.map(el=> el.department)));

    const groupedByDepartment = uniqueDepartments.reduce((acc, department) => {
        acc[department] = departments.filter(el => el.department === department);

        return acc;
    }, {});

    const departmentTitles = {
        consultation: "Консультация и диагностика",
        prevention: "Профилактика",
        therapy: "Терапия",
        orthopedics: "Ортопедия",
        orthodontics: "Ортодонтия",

        periodontology: "Пародонтология",
        implantation: "Имплантация",
        surgery: "Хирургия",
        gnathology: "Гнатология",
        pediatricDentistry: "Детская стоматология",
        teeth_whitening: "Отбеливание зубов",

    };
    const orderedDepartmentKeys = [
        'consultation',
        'prevention',
        'therapy',
        'orthopedics',
        'orthodontics',
        'surgery',
        'implantation',
        'periodontology',
        'gnathology',
        'pediatricDentistry'
    ];
    const sortedDepartments = orderedDepartmentKeys.filter(key =>
        uniqueDepartments.includes(key)
    );

    const scrollToDepartment = (buttonName) => {
        // Приводим к нижнему регистру и убираем лишние пробелы
        const normalizedButtonName = buttonName.toLowerCase().trim();

        // Находим все параграфы с id="dep"
        const depParagraphs = document.querySelectorAll('h2#dep');

        // Ищем параграф с точным совпадением текста
        for (const paragraph of depParagraphs) {
          const paragraphText = paragraph.textContent.toLowerCase().trim();

          if (paragraphText === normalizedButtonName) {
            paragraph.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            return;
          }
        }

        // Если точного совпадения нет, попробуем найти частичное как fallback
        for (const paragraph of depParagraphs) {
          const paragraphText = paragraph.textContent.toLowerCase().trim();

          if (paragraphText.includes(normalizedButtonName) ||
              normalizedButtonName.includes(paragraphText)) {
            paragraph.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            return;
          }
        }
      };

    return (
        <section>
            <div className='price-list'>
                <h1 className='text-center margin-bottom-100'> Прайс </h1>

                <div className="price-list__departments">
                    <h2> Отделения клиники </h2>
                    <div className="row mb-md-4">
                        <button
                            className="col"
                            onClick={() => scrollToDepartment('Консультация и диагностика')}
                        >
                            Консультация и диагностика
                        </button>
                        <button
                            className="col-auto"
                            onClick={() => scrollToDepartment('Профилактика')}
                        >
                            Профилактика
                        </button>
                        <button
                            className="col"
                            onClick={() => scrollToDepartment('Терапия')}
                        >
                            Терапия
                        </button>
                        <button
                            className="col"
                            onClick={() => scrollToDepartment('Ортопедия')}
                        >
                            Ортопедия
                        </button>
                        <button
                            className="col"
                            onClick={() => scrollToDepartment('Ортодонтия')}
                        >
                            Ортодонтия
                        </button>
                    </div>

                    <div className="row mb-md-4">
                        <button
                            className="col"
                            onClick={() => scrollToDepartment('Хирургия')}
                        >
                            Хирургия
                        </button>
                        <button
                            className="col-auto"
                            onClick={() => scrollToDepartment('Имплантация')}
                        >
                            Имплантация
                        </button>
                        <button
                            className="col"
                            onClick={() => scrollToDepartment('Пародонтология')}
                        >
                            Пародонтология
                        </button>
                        <button
                            className="col"
                            onClick={() => scrollToDepartment('Гнатология')}
                        >
                            Гнатология
                        </button>
                        <button
                            className="col"
                            onClick={() => scrollToDepartment('Детская стоматология')}
                        >
                            Детская стоматология
                        </button>
                    </div>
                </div>
                {sortedDepartments.map((department, index) => (
    <div key={index} className="price-list__sections margin-top-100">
        <h2 id="dep">{departmentTitles[department] || department}</h2>

        {(department === 'orthopedics'
            ? [...groupedByDepartment[department]].sort((a, b) =>
                b.name.localeCompare(a.name))
            : groupedByDepartment[department]
        ).map((service, serviceIndex) => {
            const mobilePrice = service.price.replace(/\\n/g, '\n')
                .split('\n')
                .map(line => {
                    const cleanedLine = line
                        .replace(/(Nobel|Osstem|Straumann)\s*-\s*/gi, '')
                        .replace(/-/g, '')
                        .trim();

                    // Сохраняем строки с ₽ или содержащие "бесплатно" (в любом регистре)
                    return cleanedLine.includes('₽') || /бесплатно|0\s*\(бесплатно\)/i.test(cleanedLine)
                        ? cleanedLine
                        : '';
                })
                .filter(Boolean)
                .join('\n');

            const formattedName = service.name.replace(/\\n/g, '\n')
                .replace(/\((30 мин\.|час)\)/g, '<strong style="font-weight: 300">($1)</strong>');

            return (
                <div key={serviceIndex}>
                    <div className="row price-mobile">
                        <div className="col-md-8 col-6">
                            <p dangerouslySetInnerHTML={{ __html: formattedName }} />
                        </div>
                        <div className="col-md-4 col-4">
                            <p className="bold d-none d-md-block">{service.price.replace(/\\n/g, '\n')}</p>
                            <p className="bold d-md-none">{mobilePrice}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            );
        })}
    </div>
))}
                {/* {sortedDepartments.map((department, index) => (
                    <div key={index} className="price-list__sections margin-top-100">
                        <h2 id="dep">{departmentTitles[department] || department}</h2>

                        {(department === 'orthopedics'
                            ? [...groupedByDepartment[department]].sort((a, b) =>
                                b.name.localeCompare(a.name))
                            : groupedByDepartment[department]
                        ).map((service, serviceIndex) => (
                            <div key={serviceIndex}>
                                <div className="row price-mobile">
                                    <div className="col-md-8 col-8">
                                        <p>{service.name.replace(/\\n/g, '\n')}</p>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <p className="bold">{service.price.replace(/\\n/g, '\n')}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                ))} */}

            </div>
        </section>
)}
export default withBitrixPriceListData(PriceList)