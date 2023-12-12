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
                        <Logo 
                        logoImage={LogoA}
                        alt="LogoAmateg"
                        width="149px"
                        height="45px"
                        className=".Logo-Img Amateg"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}