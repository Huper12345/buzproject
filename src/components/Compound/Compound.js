import "./Compound.scss";
import React, {useState } from 'react';


import SwitcherImage from "../../helpers/assets/images/compoundTextSwitcher/buzzicolImage.png"



export const Compound = () => {


    const [value, setValue] = useState("Используется при гриппе, простуде, кашле, легких воспалениях верхних дыхательных путей и для укрепления иммунитета. Поэтому традиционно применяют для профилактики и при лечении простудных состояний инфекционных заболеваниях дыхательных путей. Чёрная бузина – эффективное средство против сухого кашля и кашля с отхождением мокроты. Также установлено, что цветки и плоды бузины обладают высоким профилем безопасности и могут применяться людьми всех возрастов, включая младенцев и детей. Ягоды бузины имеют высочайший уровень антиоксидантной активности, по этим качествам почти в два раза превосходя клюкву и в пять раз чернику за счет содержания флавоноидов, в частности антоцианов, которые выполняют роль антиоксидантов, в значительной степени повышая уровень иммунной защиты организма на присутствие инородного агента - вирусов, бактерий, аллергенов. Также ягоды бузины обладают мощными противовирусными свойствами.")
    
    const Buzina = () => {
        setValue("Используется при гриппе, простуде, кашле, легких воспалениях верхних дыхательных путей и для укрепления иммунитета. Поэтому традиционно применяют для профилактики и при лечении простудных состояний инфекционных заболеваниях дыхательных путей. Чёрная бузина – эффективное средство против сухого кашля и кашля с отхождением мокроты. Также установлено, что цветки и плоды бузины обладают высоким профилем безопасности и могут применяться людьми всех возрастов, включая младенцев и детей. Ягоды бузины имеют высочайший уровень антиоксидантной активности, по этим качествам почти в два раза превосходя клюкву и в пять раз чернику за счет содержания флавоноидов, в частности антоцианов, которые выполняют роль антиоксидантов, в значительной степени повышая уровень иммунной защиты организма на присутствие инородного агента - вирусов, бактерий, аллергенов. Также ягоды бузины обладают мощными противовирусными свойствами.")


    }
    

    const Selen = () => {
        setValue("Является ключевым звеном в антиоксидантной системе детского организма. Ферменты, которые связаны с селеном, защищают от свободных радикалов, аллергенов, инфекционных агентов. Таким образом реализуется защита от вирусов и бактерий, грибков и паразитов, опухолевых клеток и аллергии.")

    }

    const Zink = () => {
        setValue("Способствует мобилизации защитных сил организма. Под его воздействием возрастает количество цитокинов – молекул, которые переносят информацию об опасности. Цинк (Zn2+) – незаменимый компонент клеточных мембран и обеспечения клеточного звена иммунитета. ")
    }

    const VitaminA = () => {
        setValue("Способствует укреплению слизистой оболочки дыхательных путей, которые являются первым барьером на пути вируса. Дефицит витамина A снижает сопротивляемость организма инфекциям и замедляет иммунный ответ.  ")
    }

    const VitaminC = () => {
        setValue("Витамин С способствует поддержанию сопротивляемости организма, защищает ребенка от бактерий, вирусов, инфекций тормозит развитие аллергических реакций, укрепляет кровеносные сосуды, нейтрализует действие свободных радикалов. Витамин С повышает устойчивость клеток организма к воздействию вирусов. Данный витамин стимулирует выработку интерферона – вещества, необходимого для борьбы с вирусной атакой.")
    }

    const VitaminD3 = () => {
        setValue("Витамин D участвует в заживлении ран, снижает вероятность инфекций верхних дыхательных путей")
    }

    const VitaminE = () => {
        setValue("Витамин Е увеличивает защитные силы организма и стабилизирует работу кровеносной, мышечной, нервной систем.")
    }

    const UltraB = () => {
        setValue("Клеточный метабиотик, состоящий из продуктов физико-ферментативного расщепления пробиотических клеток. Продукт инактивации и физико-ферментативного расщепления клеток пробиотических бактерий Bifidobacterium bifidum. Обладает иммуномодулирующим действием, способствует снижению веса и поддержанию нормальной работы кишечника.")
    }

    const UltraL = () => {
        setValue("Клеточный метабиотик, состоящий из продуктов физико-ферментативного расщепления пробиотических клеток. Продукт инактивации и физико-ферментативного расщепления клеток пробиотических бактерий Lactobacillus acidophilus. Обладает противоаллергическими, антимикробными, противовоспалительными свойствами. Используется для поддержания работы кишечника и стимуляции роста собственной микробиоты.")
    }

    const UltraS = () => {
        setValue("Клеточный метабиотик, состоящий из продуктов физико-ферментативного расщепления пробиотических клеток. Продукт инактивации и физико-ферментативного расщепления клеток пробиотических бактерий Streptococcus thermophilus. Стимулирует врожденный иммунитет, обеспечивает широкую биологическую активность в отношении здоровья кожи. Стимулирует регенерацию эпителиальных клеток.")
    }

   

      
     

    
    return(
        <div className="Compound">
            

            <div className="container gray-back">
                <div className="Compound-inner">
                    <div className="Compound-Buttons">
                        <h3 className="Compound-Title">1 таблетка содержит:</h3>

                
                        <div className="Buttons-Container">
                                             
                        <button id="1" onClick={Buzina} className= "Compound-Button" >
                        Экстракт бузины
                        <div className="Compound-Button-subtext">28 мг</div>
                        </button>

                         <button  id="0" onClick={Selen} className="Compound-Button padding-30">
                         Селен
                        <div className="Compound-Button-subtext additional13">6,75 мкг</div>
                        </button>

                        <button onClick={Zink}  className="Compound-Button padding-30">
                        Цинк
                        <div className="Compound-Button-subtext additional13">2,48 мкг</div>
                        </button>

                         <button onClick={VitaminA} className="Compound-Button padding-30">
                         Витамин А
                        <div className="Compound-Button-subtext additional13">0,12 мг</div>
                        </button>

                        <button onClick={VitaminC} className="Compound-Button padding-30">
                        Витамин C
                        <div className="Compound-Button-subtext">16 мг</div>
                        </button>

                         <button onClick={VitaminD3} className="Compound-Button padding-30">
                         Витамин D3
                        <div className="Compound-Button-subtext additional12">3 мкг</div>
                        </button>

                        <button onClick={VitaminE} className="Compound-Button padding-30">
                        Витамин E
                        <div className="Compound-Button-subtext">2 мг</div>
                        </button>        

                        <button onClick={UltraB} className="Compound-Button fontSizeMin">
                        Ультрализат пептидный Bifidobacterium bifidum
                        <div className="Compound-Button-subtext">10 мг</div>
                        </button>

                        <button onClick={UltraL} className="Compound-Button fontSizeMin">
                        Ультрализат пептидный
                        Lactobacillus acidophilus
                        <div className="Compound-Button-subtext">10 мг</div>
                        </button>

                         <button onClick={UltraS} className="Compound-Button fontSizeMin">
                         Ультрализат пептидный
                        Streptococcus thermophilus
                        <div className="Compound-Button-subtext">10 мг</div>
                        </button>                

                        </div>
                    </div> {/*Compound-buttons */}

                    <div className="Compound-Content">
                    
                        <div className="CompoundTextSwitcher">

                        <img alt="Buzzicol" src={SwitcherImage} className='Switcher-Img hide ' ></img>
                        <textarea value={value} className="Compound-White-Text" >
                        </textarea >
                        </div>

                    </div>
                </div>
            </div> 

        </div>
        
    );
}