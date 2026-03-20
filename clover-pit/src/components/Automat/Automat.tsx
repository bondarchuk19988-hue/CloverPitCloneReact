import React, { useState, useEffect } from 'react';
import s from './Automat.module.css';
import SlotWndow from './SlotWndow/SlotWndow';
import ChoosingSpins from './ChoosingSpins/ChoosingSpins';
import Ruchka from './Ruchka/Ruchka';
import UpTabloAutomat from './UpTabloAutomat/UpTabloAutomat'
import { Route, Routes } from 'react-router-dom'
import store from '../../redux/storeg';

const Automat = () => {
    const [roundStatus, setRoundStatus] = useState(store.getState().rols.statusRoundWindow);
    
    useEffect(() => {

        const unsubscribe = store.subscribe(() => {
            setRoundStatus(store.getState().rols.statusRoundWindow);
        });
        

        return () => unsubscribe();
    }, []);
    
    let dwTabloAutomat = []
    
    if (roundStatus < 3) {
        dwTabloAutomat.push(
            <ChoosingSpins/>
        );
    } else {
        dwTabloAutomat.push(
            <SlotWndow />
        );
    }

    return (
        <div className={s.ConAutomat}>
            <div className='пока заглушка'></div>
            <div className={s.automatBeg}>
                <div className={s.automatAndRuchka}>
                    <div className={s.automat}>
                        <div className={s.upTabloAutomat}>{/*табло раундов и цены*/}
                            <div></div>
                            <UpTabloAutomat/>
                            <div></div>
                        </div>
                        <div className={s.dwTabloAutomat}>{/*табло спинов и выпадения символов*/}
                            {dwTabloAutomat}
                        </div>
                    </div>
                    <Ruchka/>
                </div>
            </div>
            <div className='пока заглушка'></div>
        </div>
    );
}

export default Automat;