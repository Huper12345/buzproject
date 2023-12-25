import "./Footer.scss"
import { FooterNav } from "./FooterNav";
import { Contacts } from "./Contacts";
import { Logo } from "../Header/Logo";
import FootL from "../../helpers/assets/images/logo/BuzzicolR.png"
import AmategF from "../../helpers/assets/images/logo/LogoAmateg.png"


export const Footer = () => {
    return(
        <footer id="Footer" className="Footer">
            <div className="container gray-back">
                <div className="Footer-Inner">
                    <div className="Footer-Item">
                        <Logo 
                        logoImage={FootL}
                        />
                        <FooterNav 
                        href1="#"
                        text1="О продукте"
                        href2="#"
                        text2="Где купить?"
                        href3="#"
                        text3="Состав"
                        href4="#"
                        text4="Производитель"
                        />
                    </div>
                    <div className="Footer-Item">
                        <Logo
                        logoImage={AmategF} 
                         alt="LogoAmateg"
                         width="149px"
                         height="45px"
                         className="Logo-Img Amateg AmategFooter"
                        />
                        <Contacts 
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};