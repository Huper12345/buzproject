import "./Preferences.scss";
import Colb from "../../../helpers/assets/images/preferences/colb.webp"
import AllFamily from "../../../helpers/assets/images/preferences/allfamily.webp"
import MadeInRB from "../../../helpers/assets/images/preferences/madeinRB.webp"
import TimeC from "../../../helpers/assets/images/preferences/TimeC.webp"
import Price from "../../../helpers/assets/images/preferences/Price.webp"



export const Preferences = () => {
    return(
        <div className="Preferences">
            <div className="Preferences-item">
                <div className="Preferences-text">
                    60 вкусных таблеток для иммунитета
                </div>
            </div> {/* Preferences-item */}

            <div className="Preferences-item">
                <img src={Colb} alt="preferences-item" className="Preferences-item-img"></img>
                <div className="Preferences-text">
                    Без красителей и консервантов
                </div>
            </div> {/* Preferences-item */}

            <div className="Preferences-item">
                <img src={AllFamily} alt="preferences-item" className="Preferences-item-img"></img>
                <div className="Preferences-text short marginLeft-12">
                    Для всей семьи
                </div>
            </div> {/* Preferences-item */}

            <div className="Preferences-item">
                <img src={MadeInRB} alt="preferences-item" className="Preferences-item-img"></img>
                <div className="Preferences-text short marginLeft-12">
                    Сделано в Беларуси
                </div>
            </div> {/* Preferences-item */}

            <div className="Preferences-item">
                <img src={TimeC} alt="preferences-item" className="Preferences-item-img"></img>
                <div className="Preferences-text marginLeft-9">
                    Упаковка на курс приема
                </div>
            </div> {/* Preferences-item */}

            <div className="Preferences-item">
                <img src={Price} alt="preferences-item" className="Preferences-item-img"></img>
                <div className="Preferences-text marginLeft-12">
                   Выгодная цена
                </div>
            </div> {/* Preferences-item */}

        </div>
    )
}