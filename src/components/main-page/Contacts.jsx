import "../../styles/main-page/Contacts.css";

export default function Contacts () {

    return (
        <section>
            <div className="contacts">

                <h2> Контакты </h2>

                <div>
                    <div className="contacts__makhachkala">


                        <h3> Махачкала </h3>
                        <div className="contacts__makhachkala__numbers">
                            <p> улица Аскерханова, 1В </p>
                            <span>+7 989 877 78 88 </span>
                            <span>+7 988 777 88 87 (Дети)</span>
                        </div>

                        <div className="contacts__makhachkala__numbers">
                            <p> улица Хурукринская, 11</p>
                            <span>+7 963 799 77 88 </span>
                        </div>

                    </div>

                    <div className="contacts__moscow">

                        <h3> Москва </h3>
                        <div className="contacts__moscow__numbers">
                            <p> улица Аскерханова, 1В </p>
                            <span>+7 989 877 78 88 </span>
                            <span>+7 988 777 88 87 (Дети)</span>
                        </div>

                        <div className="contacts__moscow__numbers">
                            <p> улица Хурукринская, 11</p>
                            <span>+7 963 799 77 88 </span>
                        </div>

                    </div>
                </div>
                
            </div>
        </section>
    )
}