import "./Compound.scss";
import { CompoundButton } from "./Compound-Button";



export const Compound = () => {
    return(
        <div className="Compound">
            <div className="container gray-back">
                <div className="Compound-inner">
                    <div className="Compound-Buttons">
                        <h3 className="Compound-Title">1 таблетка содержит</h3>
                        <div className="Buttons-Container">
                        <CompoundButton 
                        buttonTitle="Экстракт бузины" 
                        buttonSubtext="28 мг"
                        />

                        <CompoundButton
                        className="Compound-Button padding-30" 
                        buttonTitle="Селен" 
                        buttonSubtext="6,75 мкг"
                        subTextClass="Compound-Button-subtext additional13"
                        />

                        <CompoundButton
                        className="Compound-Button padding-30" 
                        buttonTitle="Цинк" 
                        buttonSubtext="2,48 мкг"
                        subTextClass="Compound-Button-subtext additional13"
                        />

                        <CompoundButton
                        className="Compound-Button padding-30" 
                        buttonTitle="Витамин А" 
                        buttonSubtext="0,12 мг"
                        subTextClass="Compound-Button-subtext additional13"
                        />

                        <CompoundButton
                        className="Compound-Button padding-30" 
                        buttonTitle="Витамин C" 
                        buttonSubtext="16 мг"
                        />

                        <CompoundButton
                        className="Compound-Button padding-30" 
                        buttonTitle="Витамин D3" 
                        buttonSubtext="3 мкг"
                        subTextClass="Compound-Button-subtext additional12"
                        />

                        <CompoundButton 
                        buttonTitle="Витамин E" 
                        buttonSubtext="2 мг"
                        className="Compound-Button padding-30" 
                        />

                        <CompoundButton 
                        buttonTitle="Ультрализат пептидный
                        Bifidobacterium bifidum" 
                        buttonSubtext="10 мг"
                        className="Compound-Button fontSizeMin" 
                        />

                        <CompoundButton 
                        buttonTitle="Ультрализат пептидный
                        Lactobacillus acidophilus" 
                        buttonSubtext="10 мг"
                        className="Compound-Button fontSizeMin" 
                        />

                         <CompoundButton 
                        buttonTitle="Ультрализат пептидный
                        Streptococcus thermophilus" 
                        buttonSubtext="10 мг"
                        className="Compound-Button fontSizeMin" 
                        />

                        </div>
                    </div>
                </div>{/*compound-inner */}
            </div> {/*container */}
        </div>
    )
}