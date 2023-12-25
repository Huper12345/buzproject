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
                        href1="introscrool"
                        text1="О продукте"
                        href2="whenbuy"
                        text2="Где купить?"
                        href3="compound"
                        text3="Состав"
                        href4="https://amateg.by/"
                        text4="Производитель"
                        />
                    </div>
                    <div className="Footer-Item">
                    <a 
                        href="https://amateg.by/" 
                        className="Logo-Link" 
                        target="blank">
                        <img 
                        className="Logo-Img Amateg AmategFooter" 
                        alt="LogoAmateg" 
                        width="149px" 
                        height="45px" 
                        src={AmategF}></img>
                        </a>
                        <Contacts 
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};