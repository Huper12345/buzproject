import { createRef } from 'react';
import './Intro.scss';

import { TopButton } from '../../helpers/components/TopButton';
import { Pack } from './Pack';
import { Advantages } from '../../helpers/components/Advantages';
import { InstructionButton } from './InstructionButton';
import { Preferences } from './Preferences';
import { Title } from '../../helpers/components/Title';

export const Intro = () => {

const refComponent = createRef();

    return (
        <div ref={refComponent} id='Intro' className="Intro">
            <div className='container white-back'>
                <div className="Intro-inner">
                    <div className='Intro-wrapper'>
                        <TopButton refComponent={refComponent}/>
                        <Pack />
                        <div className='Intro-content'>
                            <h1 className='Intro-title'>ИММУНО-КОМПЛЕКС 3+
                            <p className='Intro-subtile'>
                            с бузиной, витаминами, минералами и пребиотиком
                            </p>
                            </h1>
                            
                            <div id='introscrool' className='Advantages-container'>
                                <Advantages 
                                buttonText="Рекомендации к применению"
                                droptext="Детям старше 3 лет по 1
                                таблетке 3 раза в сутки после еды, при необходимости
                                таблетку можно измельчить. Лицам старше 18 лет по 1
                                таблетке 5 раз в сутки после еды, взрослым возможен
                                одновременный приём – 5 таблеток после еды. Детям, при
                                употреблении суточной дозировки, не употреблять
                                одновременно препараты, содержащие цинк, селен,
                                витамины: А, С, Д, Е."
                                />
                                <Advantages 
                                buttonText="Противопоказания"
                                droptext="Индивидуальная непереносимость
                                компонентов, беременность и кормление грудью."
                                />
                                <Advantages 
                                buttonText="О компонентах комплекса"
                                droptext="Компоненты комлекса способствуют поддержанию активности
                                иммунной системы, снижению риска развития
                                простудных заболеваний, повышению устойчивости
                                организма к инфекциям, облегчению самочувствия при простуде
                                и ускорению выздоровления, антиоксидантной защите, помогаеют поддержать организм ребенка
                                в период адаптации в детском саду, школе"
                                />
                                <Advantages 
                                buttonText="Экстракт черной бузины"
                                droptext="Используется при гриппе, простуде, кашле, легких воспалениях верхних дыхательных
                                путей и для укрепления иммунитета. Поэтому традиционно применяют для
                                профилактики и при лечении простудных состояний инфекционных заболеваниях
                                дыхательных путей. Чёрная бузина – эффективное средство против сухого кашля и
                                кашля с отхождением мокроты.
                                Также установлено, что цветки и плоды бузины обладают высоким профилем
                                безопасности и могут применяться людьми всех возрастов, включая младенцев и
                                детей.
                                Ягоды бузины имеют высочайший уровень антиоксидантной активности, по этим
                                качествам почти в два раза превосходя клюкву и в пять раз чернику за счет
                                содержания флавоноидов, в частности антоцианов, которые выполняют роль
                                антиоксидантов, в значительной степени повышая уровень иммунной защиты
                                организма на присутствие инородного агента - вирусов, бактерий, аллергенов. Также
                                ягоды бузины обладают мощными противовирусными свойствами.
                                "
                                />
                            </div>
                            <InstructionButton />
                        </div>  {/* Intro-content */}
                    </div> {/* Intro-wrapper */}
                    <Preferences />
                </div> {/* Intro-inner */}
                <Title TitleText="Состав" />
            </div>
        </div>
    );
};