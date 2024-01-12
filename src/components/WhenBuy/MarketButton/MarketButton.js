import "./MarketButton.scss"




export const MarketButton = ({src, href, text, alt, spanType="Buy-Market-Text", width="220px", height="45px"}) => {
    return(
    <a target="blank" href={href} className="When-Buy-MarketPlace">
        <img width={width} height={height} alt={alt} src={src} className="Buy-Market-IMG"></img>
        <span className={spanType}>{text}</span>
    </a>
    )
}