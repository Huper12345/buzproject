import "./Compound.scss";
import React, {useState } from 'react';

import SwitcherImage from "../../helpers/assets/images/compoundTextSwitcher/buzzicolImage.png"



export const Compound = () => {

  // Classes
    
    const [BuzinaClass, setBuzinaClass] = useState("Compound-Button active");

    //btn 2

    const [SelenClass, setSelenClass] = useState("Compound-Button padding-30");

    const [ZinkClass, setZinkClass] = useState("Compound-Button padding-30");

    const [VitaminAClass, setVitaminAClass] = useState("Compound-Button padding-30");

    const [VitaminCClass, setVitaminCClass] = useState("Compound-Button padding-30");

    const [VitaminEClass, setVitaminEClass] = useState("Compound-Button padding-30");

    const [VitaminD3Class, setVitaminD3Class] = useState("Compound-Button padding-30");

    //btn 3

    const [UltraBClass, setUltraBClass] = useState("Compound-Button fontSizeMin");

    const [UltraLClass, setUltraLClass] = useState("Compound-Button fontSizeMin");

    const [UltraSClass, setUltraSClass] = useState("Compound-Button fontSizeMin");


    const btn1StandartClass = "Compound-Button";

    const btn2StandartClass = "Compound-Button padding-30";

    const btn3StandartClass = "Compound-Button fontSizeMin";



    const btn1Active = "Compound-Button active"

    const btn2Active = "Compound-Button padding-30 active"

    const btn3Active = "Compound-Button fontSizeMin active"



    const [value, setValue] = useState("Используется при гриппе, простуде, кашле, легких воспалениях верхних дыхательных путей и для укрепления иммунитета. Поэтому традиционно применяют для профилактики и при лечении простудных состояний инфекционных заболеваниях дыхательных путей. Чёрная бузина – эффективное средство против сухого кашля и кашля с отхождением мокроты. Также установлено, что цветки и плоды бузины обладают высоким профилем безопасности и могут применяться людьми всех возрастов, включая младенцев и детей. Ягоды бузины имеют высочайший уровень антиоксидантной активности, по этим качествам почти в два раза превосходя клюкву и в пять раз чернику за счет содержания флавоноидов, в частности антоцианов, которые выполняют роль антиоксидантов, в значительной степени повышая уровень иммунной защиты организма на присутствие инородного агента - вирусов, бактерий, аллергенов. Также ягоды бузины обладают мощными противовирусными свойствами.")
    
    const Buzina = () => {
        setValue("Используется при гриппе, простуде, кашле, легких воспалениях верхних дыхательных путей и для укрепления иммунитета. Поэтому традиционно применяют для профилактики и при лечении простудных состояний инфекционных заболеваниях дыхательных путей. Чёрная бузина – эффективное средство против сухого кашля и кашля с отхождением мокроты. Также установлено, что цветки и плоды бузины обладают высоким профилем безопасности и могут применяться людьми всех возрастов, включая младенцев и детей. Ягоды бузины имеют высочайший уровень антиоксидантной активности, по этим качествам почти в два раза превосходя клюкву и в пять раз чернику за счет содержания флавоноидов, в частности антоцианов, которые выполняют роль антиоксидантов, в значительной степени повышая уровень иммунной защиты организма на присутствие инородного агента - вирусов, бактерий, аллергенов. Также ягоды бузины обладают мощными противовирусными свойствами.")

        // btn1
        setBuzinaClass(btn1Active); //Main

        // btn2
        setSelenClass(btn2StandartClass);
        setZinkClass(btn2StandartClass);
        setVitaminAClass(btn2StandartClass);
        setVitaminCClass(btn2StandartClass);
        setVitaminEClass(btn2StandartClass);
        setVitaminD3Class(btn2StandartClass);

        // btn3
        
        setUltraBClass(btn3StandartClass);
        setUltraLClass(btn3StandartClass);
        setUltraSClass(btn3StandartClass);


    }
    

    const Selen = () => {
        setValue("Является ключевым звеном в антиоксидантной системе детского организма. Ферменты, которые связаны с селеном, защищают от свободных радикалов, аллергенов, инфекционных агентов. Таким образом реализуется защита от вирусов и бактерий, грибков и паразитов, опухолевых клеток и аллергии.")

        setBuzinaClass("Compound-Button");

         // btn1
         setBuzinaClass(btn1StandartClass); 

         // btn2
         setSelenClass(btn2Active); //Main
         setZinkClass(btn2StandartClass);
         setVitaminAClass(btn2StandartClass);
         setVitaminCClass(btn2StandartClass);
         setVitaminEClass(btn2StandartClass);
         setVitaminD3Class(btn2StandartClass);
 
         // btn3
         
         setUltraBClass(btn3StandartClass);
         setUltraLClass(btn3StandartClass);
         setUltraSClass(btn3StandartClass);


     
    }

   

    const Zink = () => {
        setValue("Способствует мобилизации защитных сил организма. Под его воздействием возрастает количество цитокинов – молекул, которые переносят информацию об опасности. Цинк (Zn2+) – незаменимый компонент клеточных мембран и обеспечения клеточного звена иммунитета. ")

           // btn1
           setBuzinaClass(btn1StandartClass); 

           // btn2
           setSelenClass(btn2StandartClass);
           setZinkClass(btn2Active); //Main
           setVitaminAClass(btn2StandartClass);
           setVitaminCClass(btn2StandartClass);
           setVitaminEClass(btn2StandartClass);
           setVitaminD3Class(btn2StandartClass);
   
           // btn3
           
           setUltraBClass(btn3StandartClass);
           setUltraLClass(btn3StandartClass);
           setUltraSClass(btn3StandartClass);
      

    }

    const VitaminA = () => {
        setValue("Способствует укреплению слизистой оболочки дыхательных путей, которые являются первым барьером на пути вируса. Дефицит витамина A снижает сопротивляемость организма инфекциям и замедляет иммунный ответ.  ")

           // btn1
           setBuzinaClass(btn1StandartClass); 

           // btn2
           setSelenClass(btn2StandartClass);
           setZinkClass(btn2StandartClass); 
           setVitaminAClass(btn2Active);//Main
           setVitaminCClass(btn2StandartClass);
           setVitaminEClass(btn2StandartClass);
           setVitaminD3Class(btn2StandartClass);
   
           // btn3
           
           setUltraBClass(btn3StandartClass);
           setUltraLClass(btn3StandartClass);
           setUltraSClass(btn3StandartClass);
        
    
    }

    const VitaminC = () => {
        setValue("Витамин С способствует поддержанию сопротивляемости организма, защищает ребенка от бактерий, вирусов, инфекций тормозит развитие аллергических реакций, укрепляет кровеносные сосуды, нейтрализует действие свободных радикалов. Витамин С повышает устойчивость клеток организма к воздействию вирусов. Данный витамин стимулирует выработку интерферона – вещества, необходимого для борьбы с вирусной атакой.")

              // btn1
              setBuzinaClass(btn1StandartClass); 

              // btn2
              setSelenClass(btn2StandartClass);
              setZinkClass(btn2StandartClass); 
              setVitaminAClass(btn2StandartClass);
              setVitaminCClass(btn2Active); //Main
              setVitaminEClass(btn2StandartClass);
              setVitaminD3Class(btn2StandartClass);
      
              // btn3
              
              setUltraBClass(btn3StandartClass);
              setUltraLClass(btn3StandartClass);
              setUltraSClass(btn3StandartClass);
      
    
    }

    const VitaminD3 = () => {
        setValue("Витамин D участвует в заживлении ран, снижает вероятность инфекций верхних дыхательных путей")

              // btn1
              setBuzinaClass(btn1StandartClass); 

              // btn2
              setSelenClass(btn2StandartClass);
              setZinkClass(btn2StandartClass); 
              setVitaminAClass(btn2StandartClass);
              setVitaminCClass(btn2StandartClass); 
              setVitaminEClass(btn2StandartClass);
              setVitaminD3Class(btn2Active); //Main
      
              // btn3
              
              setUltraBClass(btn3StandartClass);
              setUltraLClass(btn3StandartClass);
              setUltraSClass(btn3StandartClass);
        
    
    }

    const VitaminE = () => {
        setValue("Витамин Е увеличивает защитные силы организма и стабилизирует работу кровеносной, мышечной, нервной систем.")

        // btn1
        setBuzinaClass(btn1StandartClass); 

        // btn2
        setSelenClass(btn2StandartClass);
        setZinkClass(btn2StandartClass); 
        setVitaminAClass(btn2StandartClass);
        setVitaminCClass(btn2StandartClass); 
        setVitaminEClass(btn2Active);//Main
        setVitaminD3Class(btn2StandartClass); 

        // btn3
        
        setUltraBClass(btn3StandartClass);
        setUltraLClass(btn3StandartClass);
        setUltraSClass(btn3StandartClass);
       
    
    }

    const UltraB = () => {
        setValue("Клеточный метабиотик, состоящий из продуктов физико-ферментативного расщепления пробиотических клеток. Продукт инактивации и физико-ферментативного расщепления клеток пробиотических бактерий Bifidobacterium bifidum. Обладает иммуномодулирующим действием, способствует снижению веса и поддержанию нормальной работы кишечника.")

             // btn1
             setBuzinaClass(btn1StandartClass); 

             // btn2
             setSelenClass(btn2StandartClass);
             setZinkClass(btn2StandartClass); 
             setVitaminAClass(btn2StandartClass);
             setVitaminCClass(btn2StandartClass); 
             setVitaminEClass(btn2StandartClass);
             setVitaminD3Class(btn2StandartClass); 
     
             // btn3
             
             setUltraBClass(btn3Active); //Main
             setUltraLClass(btn3StandartClass);
             setUltraSClass(btn3StandartClass);
       
    
    }

    const UltraL = () => {
        setValue("Клеточный метабиотик, состоящий из продуктов физико-ферментативного расщепления пробиотических клеток. Продукт инактивации и физико-ферментативного расщепления клеток пробиотических бактерий Lactobacillus acidophilus. Обладает противоаллергическими, антимикробными, противовоспалительными свойствами. Используется для поддержания работы кишечника и стимуляции роста собственной микробиоты.")

         // btn1
         setBuzinaClass(btn1StandartClass); 

         // btn2
         setSelenClass(btn2StandartClass);
         setZinkClass(btn2StandartClass); 
         setVitaminAClass(btn2StandartClass);
         setVitaminCClass(btn2StandartClass); 
         setVitaminEClass(btn2StandartClass);
         setVitaminD3Class(btn2StandartClass); 
 
         // btn3
         
         setUltraBClass(btn3StandartClass); 
         setUltraLClass(btn3Active); //Main
         setUltraSClass(btn3StandartClass);
   
      
    
    }

    const UltraS = () => {
        setValue("Клеточный метабиотик, состоящий из продуктов физико-ферментативного расщепления пробиотических клеток. Продукт инактивации и физико-ферментативного расщепления клеток пробиотических бактерий Streptococcus thermophilus. Стимулирует врожденный иммунитет, обеспечивает широкую биологическую активность в отношении здоровья кожи. Стимулирует регенерацию эпителиальных клеток.")

             // btn1
             setBuzinaClass(btn1StandartClass); 

             // btn2
             setSelenClass(btn2StandartClass);
             setZinkClass(btn2StandartClass); 
             setVitaminAClass(btn2StandartClass);
             setVitaminCClass(btn2StandartClass); 
             setVitaminEClass(btn2StandartClass);
             setVitaminD3Class(btn2StandartClass); 
     
             // btn3
             
             setUltraBClass(btn3StandartClass); 
             setUltraLClass(btn3StandartClass);
             setUltraSClass(btn3Active);//Main
      
    }

   
    
    return(
        <div className="Compound">
            

            <div className="container gray-back">
                <div className="Compound-inner">
                    <div className="Compound-Buttons">
                        <h3 className="Compound-Title">1 таблетка содержит:</h3>

                
                        <div className="Buttons-Container">
                                             
                        <button id="1" onClick={Buzina} className={BuzinaClass} >
                        Экстракт бузины
                        <div className="Compound-Button-subtext">28 мг</div>
                        </button>

                         <button  id="0" onClick={Selen} className={SelenClass}>
                         Селен
                        <div className="Compound-Button-subtext additional13">6,75 мкг</div>
                        </button>

                        <button onClick={Zink}  className={ZinkClass}>
                        Цинк
                        <div className="Compound-Button-subtext additional13">2,48 мкг</div>
                        </button>

                         <button onClick={VitaminA} className={VitaminAClass}>
                         Витамин А
                        <div className="Compound-Button-subtext additional13">0,12 мг</div>
                        </button>

                        <button onClick={VitaminC} className={VitaminCClass}>
                        Витамин C
                        <div className="Compound-Button-subtext">16 мг</div>
                        </button>

                         <button onClick={VitaminD3} className={VitaminD3Class}>
                         Витамин D3
                        <div className="Compound-Button-subtext additional12">3 мкг</div>
                        </button>

                        <button onClick={VitaminE} className={VitaminEClass}>
                        Витамин E
                        <div className="Compound-Button-subtext">2 мг</div>
                        </button>        

                        <button onClick={UltraB} className={UltraBClass}>
                        Ультрализат пептидный Bifidobacterium bifidum
                        <div className="Compound-Button-subtext">10 мг</div>
                        </button>

                        <button onClick={UltraL} className={UltraLClass}>
                        Ультрализат пептидный
                        Lactobacillus acidophilus
                        <div className="Compound-Button-subtext">10 мг</div>
                        </button>

                         <button onClick={UltraS} className={UltraSClass}>
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