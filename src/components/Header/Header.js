import "./Header.scss"
import { Logo } from "./Logo"
import { Nav } from "./Nav"
import LogoT from "../../helpers/assets/images/logo/BuzzicolR.png";




export const Header = () => {



    return(
        <div className="Header">
            <div className="container">
                <div className="Header-Inner">
                    <Logo logoImage={LogoT} />
                    <div className= "Header-Content">
                        <Nav/>
                    </div>
                </div>
            </div>
        </div>
    )
}