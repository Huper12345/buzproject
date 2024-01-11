import './Pack.scss';
import BuzImg from "../../../helpers/assets/images/intro/BuzzicolPack.webp"
import BuzImgPlaceholder from "../../../helpers/assets/images/intro/BuzzicolPackPreload.webp"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export const Pack = () => {
    return(
        <div className='Buzzicol-Inner'>
            <LazyLoadImage 
            width="99%"
            height="auto" 
            alt='immunnoPack'
            wrapperClassName='Buzzicol-Img'
            PlaceholderSrc={BuzImgPlaceholder}
            src={BuzImg}
            effect="blur"
            />
         </div>
    )
}