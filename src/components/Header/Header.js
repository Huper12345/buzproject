import "./Header.scss"
import { Logo } from "./Logo"
import { Nav } from "./Nav"
import LogoT from "../../helpers/assets/images/logo/BuzzicolR.png"
import LogoA from "../../helpers/assets/images/logo/LogoAmateg.png";;


export const Header = () => {
    return(
        <div className="Header">
            <div className="container">
                <div className="Header-Inner">
                    <Logo logoImage={LogoT} />
                    <div className="Header-Content">
                        <Nav />
                        <a 
                        href="https://amateg.by/" 
                        className="Logo-Link" 
                        target="blank">
                        <img 
                        className="Logo-Img Amateg" 
                        alt="LogoAmateg" 
                        width="153px" 
                        height="49px" 
                        src={LogoA}></img>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}