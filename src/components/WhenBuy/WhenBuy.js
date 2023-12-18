import "./WhenBuy.scss"
import { Title } from "../../helpers/components/Title"
import BuyImage from "../../helpers/assets/images/intro/BuzzicolPack.png"
import { ArrowIcon } from "./ArrowIcon"
import { MarketButton } from "./MarketButton"
import market103 from "../../helpers/assets/images/marketButtons/103by.png"
import wildberries from "../../helpers/assets/images/marketButtons/widlberries.png"
import ozon from "../../helpers/assets/images/marketButtons/ozon.png"

import { useState } from "react"



export const WhenBuy = () => {
    
    const [orderBox, setOrderBox] = useState("WhenBuy-Order")

    const handleBox = () => {
        setOrderBox("WhenBuy-Order active")
    }
    
    return(
        <div className="WhenBuy">
            <div className="container">
                <div className="WhenBuy-inner">
                    <Title TitleText="Где купить?" />
                    <div className="WhenBuy-content">
                        <div className="WhenBuy-Image">
                            <img src={BuyImage} alt="buyImg" className="When-Buy-Img"></img>
                        </div>

                        <div className="WhenBuy-Text">
                            <div className="WhenBuy-Text-Content">
                                <h4 className="Buy-Text-Title">ИММУНО-КОМПЛЕКС 3+ с бузиной, витаминами, минералами и пребиотиком</h4>
                                <div className="Buy-Text-Subtitle">можно купить на любой популярной
                                площадке по <span className="Buy-Subtile-Additional">выгодной цене</span> 
                                </div>
                            </div>
                            <button onClick={handleBox} className="Order-Button">
                                Заказать
                                <ArrowIcon />
                            </button>

                        </div>

                        <div className={orderBox}>
                            <MarketButton
                            text="103.by"
                            src={market103}
                            alt="103.by"
                            href="https://apteka.103.by/immuno-kompleks-3-s-buzinoy-vitaminami-i-prebiotikom/62802-tabletki-n60/amateg/minsk/?sort=price:asc"
                            />

                            <MarketButton
                            text="wildberries.ru"
                            src={wildberries}
                            alt="wildberiies"
                            spanType="Buy-Market-Text standart"
                            href="#"
                            />

                            <MarketButton
                            text="ozon"
                            src={ozon}
                            alt="ozon"
                            spanType="Buy-Market-Text ozon"
                            href="#"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}