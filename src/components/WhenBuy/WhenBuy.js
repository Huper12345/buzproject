import "./WhenBuy.scss"
import { Title } from "../../helpers/components/Title"
import BuyImage from "../../helpers/assets/images/intro/BuzzicolPack.webp"
import { ArrowIcon } from "./ArrowIcon"
import { MarketButton } from "./MarketButton"
import market103 from "../../helpers/assets/images/marketButtons/103by.webp"
import wildberries from "../../helpers/assets/images/marketButtons/widlberries.webp"
import ozon from "../../helpers/assets/images/marketButtons/ozon.webp"



export const WhenBuy = () => {

    
    
    return(
        <div className="WhenBuy">
            <div id="whenbuy" className="container">
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
                            <button className="Order-Button">
                                Заказать
                                <ArrowIcon
                                arrowClass="Arrow-Icon"
                                />
                            </button>

                        </div>

                       <div className="WhenBuy-Order">
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
                <Title 
                TitleColor="Title-Text TitleM"
                TitleText="Содержание биологически активных веществ"
                />
            </div>
        </div>
    )
}