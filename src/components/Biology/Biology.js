import "./Biology.scss";
import table from "../../helpers/assets/images/Biology/table.webp"
import { BiologyDrop } from "./Biology-drop";



export const Biology = () => {
    return(
        <div className="Biology-wrapper">
            <div className="Biology">
                <div className="container gray-back">
                    <div className="Biology-inner">
                    <img loading="lazy" width="964px" height="auto" alt="table" src={table} className="B-Table"></img>
                    <BiologyDrop
                    buttonText="Подробнее"
                    droptext="* – норма физиологической потребности суточного потребления для детей указана в Санитарных нормах и правилах «Требования к питанию населения: нормы физиологических потребностей в энергии и пищевых                веществах для различных групп населения Республики Беларусь», утверждённых постановлением МЗ РБ 20.11.2012 №180, в постановлении МЗ РБ 16.11.2015 №111 «О внесении изменений в постановление МЗ РБ от 20.11.2012 №180»** – MP 2.3.1.0253-21 «Нормы физиологических потребностей в энергии и пищевых веществах для различ-ных групп населения Российской Федерации»**** – рекомендуемый уровень суточного потребления для взрослых указан в Приложении 2 к ТР ТС 022/2011.РЭ ТЭ – ретиноловый эквивалент/токофероловый эквивалент"
                    />
                    </div>

                </div>

            </div>

        </div>
    )
}