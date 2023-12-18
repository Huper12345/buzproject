import "./MarketButton.scss"




export const MarketButton = ({src, href, text, alt, spanType="Buy-Market-Text"}) => {
    return(
    <a target="blank" href={href} className="When-Buy-MarketPlace">
        <img alt={alt} src={src} className="Buy-Market-IMG"></img>
        <span className={spanType}>{text}</span>
    </a>
    )
}