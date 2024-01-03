import './Nav.scss';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import LogoA from "../../../helpers/assets/images/logo/LogoAmateg.webp"


export const Nav = () => {

    const [navVisible, setNavVisible] = useState("Nav-container");

    const switchNav = () => {
        setNavVisible(!navVisible);
    }

    return (
        <div className='Nav'>
            <div className='toggle-container'>
                <button onClick={switchNav} className='Nav-Mobile-Drop'>1</button>
            </div>

            <div className={navVisible ? "Nav-container" : "Nav-container active"}>
                <Link
                to="introscrool"
                smooth={true}
                offset={-70}
                duration={600}
                className="Nav-link"
                onClick={switchNav}
                >
                О продукте
                </Link>          

                <Link
                to="whenbuy"
                smooth={true}
                offset={-70}
                duration={600}
                className="Nav-link"
                onClick={switchNav}
                >
                Где купить?
                </Link>   

                <Link
                to="compound"
                smooth={true}
                offset={-70}
                duration={600}
                className="Nav-link"
                onClick={switchNav}
                >
                Состав
                </Link> 

                <a 
                href="https://amateg.by/" 
                className="Logo-Link" 
                target="blank">
                <img 
                className="Logo-Img Amateg" 
                alt="LogoAmateg" 
                 width="153px"
                height="49px"
                onClick={switchNav} 
                src={LogoA}></img>
                </a>               
            </div>
        </div>
    );
};