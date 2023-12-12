import './Nav.scss';
import { Link, animateScroll as scroll } from 'react-scroll';


export const Nav = (

) => {
    return (
        <div className='Nav'>
            <div className="Nav-container">
                <Link
                to="#"
                smooth={true}
                offset={-70}
                duration={600}
                className="Nav-link"
                >
                О продукте
                </Link>          

                <Link
                to="#"
                smooth={true}
                offset={-70}
                duration={600}
                className="Nav-link"
                >
                Где купить?
                </Link>   

                <Link
                to="#"
                smooth={true}
                offset={-70}
                duration={600}
                className="Nav-link"
                >
                Состав
                </Link>                
            </div>
        </div>
    );
};