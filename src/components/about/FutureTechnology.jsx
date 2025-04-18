import DefautCard from "./DefaultCard";
import futureTechnology from "../../assets/futureTechnology.png";
import futureTechnology2 from "../../assets/mobile/future-tech.png";
import zeiss from "../../assets/ZEISS.svg";
import primescan from "../../assets/PRIMESCAN.svg";
import airflow from "../../assets/AIRFLOW.svg";
import { useMediaQuery } from "react-responsive";

export default function FutureTechnology () {

    const isDesktop = useMediaQuery({ minWidth: 760 });

    return (
        <section className={isDesktop ? "future container-fluid px-0 p-0" : "future container"}>
            <DefautCard
                title="Технологии будущего"
                description1="Bego использует технологии, чтобы сделать лечение более эффективным и комфортным. Цифровое сканирование немецким аппаратом позволяет создавать точные
                        3D-модели зубов, избегая неудобных слепков. А сканы
                        сразу отправляются в собственную лабораторию Bego,
                        что ускоряет процесс лечения."
                description2="Новейшие методики наркоза и седации делают прохождение комплексных процедур спокойным. Цифровая система моделирования помогает изготавливать виниры с высокой точностью и без долгого ожидания. Инновационные решения по гигиене полости рта дают стойкий результат после чистки от глубокого налета и пигментации."
                image={isDesktop ? futureTechnology : futureTechnology2}
                icon1={zeiss}
                icon2={primescan}
                icon3={airflow}
                icon1Title="ZEISS"
                icon2Title="PRIMESCAN"
                icon3Title="AIRFLOW"
            />
        </section>
    )
}
