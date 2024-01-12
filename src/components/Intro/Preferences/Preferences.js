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
                <img width="34px" height="40px" src={Colb} alt="preferences-item" className="Preferences-item-img"></img>
                <div className="Preferences-text">
                    Без красителей и консервантов
                </div>
            </div> {/* Preferences-item */}

            <div className="Preferences-item">
                <img width="51px" height="40px" src={AllFamily} alt="preferences-item" className="Preferences-item-img"></img>
                <div className="Preferences-text short marginLeft-12">
                    Для всей семьи
                </div>
            </div> {/* Preferences-item */}

            <div className="Preferences-item">
                <img width="39px" height="40px" src={MadeInRB} alt="preferences-item" className="Preferences-item-img"></img>
                <div className="Preferences-text short marginLeft-12">
                    Сделано в Беларуси
                </div>
            </div> {/* Preferences-item */}

            <div className="Preferences-item">
                <img width="42px" height="40px" src={TimeC} alt="preferences-item" className="Preferences-item-img"></img>
                <div className="Preferences-text marginLeft-9">
                    Упаковка на курс приема
                </div>
            </div> {/* Preferences-item */}

            <div className="Preferences-item">
                <img width="52px" height="40px" src={Price} alt="preferences-item" className="Preferences-item-img"></img>
                <div className="Preferences-text marginLeft-12">
                   Выгодная цена
                </div>
            </div> {/* Preferences-item */}

        </div>
    )
}