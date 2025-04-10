

export default function PriceList () {

    return (
        <section>
            <div className='price-list'>
                <h1 className='text-center margin-bottom-100'> Прайс </h1>

                <div className="price-list__departments">
                    <h2> Отделения клиники </h2>
                    <div className="row mb-4">
                        <button className="col"> Консультация и диагностика </button>
                        <button className="col-auto"> Профилактика </button>
                        <button className="col"> Терапия </button>
                        <button className="col"> Ортопедия </button>
                        <button className="col"> Ортодонтия </button>
                    </div>

                    <div className="row mb-4">
                        <button className="col"> Хирургия </button>
                        <button className="col-auto"> Имплантация </button>
                        <button className="col"> Пародонтология </button>
                        <button className="col"> Гнатология </button>
                        <button className="col"> Детская стоматология </button>
                    </div>
                </div>

                <div className="price-list__sections margin-top-100">
                    <h2> Профилактика </h2>
                    <h2> Профессиональная гигиена </h2>
                    <div>
                        <div className="row">
                            <div className="col-7">
                                <p>
                                Профессиональная гигиена по швейцарскому протоколу AIRFLOW ® Prophylaxis Master (включая ремотерапию, контроль навыков гигиены, подбор индивидуальных средств)
                                </p>
                            </div>
                            <div className="col-5">
                                <p className="bold">
                                8 000 ₽
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-7">
                                <p>
                                Профессиональная гигиена (включая ремотерапию, контроль навыков гигиены, подбор индивидуальных средств)
                                </p>
                            </div>
                            <div className="col-5">
                                <p className="bold">
                                от 5 000 ₽
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="price-list__sections margin-top-100">
                    <h2>Отбеливание зубов </h2>

                    <div>
                        <div className="row">
                            <div className="col-7">
                                <p>
                                Отбеливание ZOOM4
                                </p>
                            </div>
                            <div className="col-5">
                                <p className="bold">
                                23 000 ₽
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-7">
                                <p>
                                Домашнее отбеливание зубов системой ZOOM
                                с индивидуальными капами
                                </p>
                            </div>
                            <div className="col-5">
                                <p className="bold">
                                от 3 000 ₽
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="price-list__sections margin-top-100">
                    <h2> Терапия </h2>

                    <div>
                        <div className="row">
                            <div className="col-7">
                                <p>
                                Лечение кариеса
                                </p>
                            </div>
                            <div className="col-5">
                                <p className="bold">
                                5 000 ₽
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-7">
                                <p>
                                Лечение пульпита
                                </p>
                            </div>
                            <div className="col-5">
                                <p className="bold">
                                от 11 000 ₽
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-7">
                                <p>
                                Лечение периодонтита
                                </p>
                            </div>
                            <div className="col-5">
                                <p className="bold">
                                от 11 000 ₽
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-7">
                                <p>
                                Лечение зубов под микроскопом
                                </p>
                            </div>
                            <div className="col-5">
                                <p className="bold">
                                от 7 500 ₽
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-7">
                                <p>
                                Эстетическая реставрация зуба
                                </p>
                            </div>
                            <div className="col-5">
                                <p className="bold">
                                от 6 500 ₽
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
)}