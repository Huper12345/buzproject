import React from "react"
import { useState } from "react";
import "./BiologyDrop.scss";
import { BiologyDropIcon } from "./BiologyDropIcon";
import { BiologyDropDownload } from "./BiologyDropDownload";
import tableDownload from "../../../helpers/assets/images/Biology/tableDownload.pdf"


export const BiologyDrop = () => {
const [biologyDrop, setBiologyDrop] = useState("Biology-Drop-Button");

const [dropContent, setDropContent] = useState("Drop-Content")

const handleBiology = () => {
  setBiologyDrop(!biologyDrop);
  setDropContent(!dropContent);
}

return(
  <div className="Biology-Drop">
    <button onClick={handleBiology} className={biologyDrop ? "Biology-Drop-Button" : "Biology-Drop-Button active"}>
      <BiologyDropIcon />
      Подробнее
      </button>
      <div className={dropContent ? "Drop-Content" : "Drop-Content active"}>
        <div className="Drop-Content-Text">
        * – норма физиологической потребности суточного потребления для детей указана в Санитарных нормах и                  правилах «Требования к питанию населения: нормы физиологических потребностей в энергии и пищевых                веществах для различных групп населения Республики Беларусь», утверждённых постановлением МЗ РБ 20.11.2012 №180, в постановлении МЗ РБ 16.11.2015 №111 «О внесении изменений в постановление МЗ РБ от 20.11.2012 №180»
        ** – MP 2.3.1.0253-21 "Нормы физиологических потребностей в энергии и пищевых веществах для различ-ных групп населения Российской Федерации"
        *** – рекомендуемый уровень суточного потребления для взрослых указан в Приложении 2 к ТР ТС 022/2011.
        РЭ/ТЭ – ретиноловый эквивалент/токофероловый эквивалент
        </div>
        <a target="blank" href={tableDownload} className="Biology-Download-Button">
          <BiologyDropDownload />
          Скачать таблицу
        </a>
      </div>
  </div>
)

}
 

   