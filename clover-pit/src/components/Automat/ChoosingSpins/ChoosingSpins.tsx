import React, { useState, useEffect } from 'react';
import s from './ChoosingSpins.module.css';
import store from '../../../redux/storeg';
import { statusRoundsWindow } from '../../../redux/storeg';

const ChoosingSpins = () => {
    let sevenSpins = () =>{
        return(
            store.dispatch(statusRoundsWindow(3))
        )
    }
    const [statusround, setStatusround] = useState(store.getState().rols.statusRoundWindow);

    useEffect(() => {

        const unsubscribe = store.subscribe(() => {
            setStatusround(store.getState().rols.statusRoundWindow);
        });


        return () => unsubscribe();
    }, []);

    let gamego = () => {
        store.dispatch(statusRoundsWindow(2));
    };

    let windowOutput = []

    if (statusround === 1) {
        windowOutput.push(
            <div className={s.choosingspins}>
                <div className={s.game}>Играй</div>
                <button className={s.goGame} onClick={gamego}>Начать игру</button>
            </div>
        );
    } else if (statusround === 2) {
        windowOutput.push(
            <div>
                <div className={s.choosingRoles}>
                    <h2>Сколько спинов?</h2>
                </div>
                <div className={s.choice}>
                    <button onClick={sevenSpins} className={s.invisibleButton} >
                        7 спинов за {store.getState().round.round7}
                    </button>
                    <button className={s.invisibleButton} >
                        Пока недоступна.
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            {windowOutput}
        </div>
    );
};

export default ChoosingSpins;