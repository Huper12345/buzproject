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
                            <img width="270px" height="auto" src={BuyImage} alt="buyImg" className="When-Buy-Img"></img>
                        </div>

                        <div className="WhenBuy-Text">
                            <div className="WhenBuy-Text-Content">
                                <h3 className="Buy-Text-Title">ИММУНО-КОМПЛЕКС 3+ с бузиной, витаминами, минералами и пребиотиком</h3>
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
                            width="220px"
                            height="45px"
                            text="103.by"
                            src={market103}
                            alt="103.by Информационный ресурс"
                            href="https://apteka.103.by/immuno-kompleks-3-s-buzinoy-vitaminami-i-prebiotikom/62802-tabletki-n60/amateg/minsk/?sort=price:asc"
                            />

                            <MarketButton
                            width="220px"
                            height="45px"
                            text="wildberries.ru"
                            src={wildberries}
                            alt="Маркетплейс wildberries"
                            spanType="Buy-Market-Text standart"
                            href="https://www.wildberries.ru/catalog/195311361/detail.aspx"
                            />

                            <MarketButton
                            width="220px"
                            height="45px"
                            text="ozon"
                            src={ozon}
                            alt="Маркетплейс Ozon"
                            spanType="Buy-Market-Text ozon"
                            href="https://www.ozon.ru/product/immuno-kompleks-3-s-buzinoy-vitaminami-mineralami-i-prebiotikom-buzzikol-1359960631/?_bctx=CAQQzPYC&asb=WaQfk3TjR5bmCrg3f5o%252F9yUlcQpr8YnaHGsflVZs69Q%253D&asb2=6-E4lm5SIjXbcr-h63eT3dmmgBcVhC9908R6tY0Eff7u_uM1MvNAalowPK3rqA9P&avtc=1&avte=2&avts=1705058416&hs=1"
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