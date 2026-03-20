import React, { useState, useEffect } from 'react';
import s from './SlotWndow.module.css';
import store from '../../../redux/storeg';
interface Symvol {
    id: number
    name: string
    value: number
    weight: number
    img: string
}
const SlotWndow = () => {
    const [symbols, setSymbols] = useState<Symvol[]>(store.getState().simvolPage.newRoll);
    
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setSymbols(store.getState().simvolPage.newRoll);
        });
        
        return () => unsubscribe();
    }, []);

    let lain1 = []
    let lain2 = []
    let lain3 = []
    let newRollWndow: Symvol[] = store.getState().simvolPage.newRoll
    if (newRollWndow.length === 15) {
        for (let i = 0; i < newRollWndow.length; i++) {
            const symbol = newRollWndow[i]
            if (i <= 4) {
                lain1.push(
                    <div id={`1-${i}`}className={s.lain1}>
                        <img src={symbol.img} alt={symbol.name} />
                    </div>
                )
            } else if (i <= 9) {
                lain2.push(
                    <div id={`2-${i}`} className={s.lain2}>
                        <img src={symbol.img} alt={symbol.name} />
                    </div>
                )
            } else {
                lain3.push(
                    <div id={`3-${i}`} className={s.lain3}>
                        <img src={symbol.img} alt={symbol.name} />
                    </div>
                )
            }
        }
    }
    return (
        <div className={s.slotContainer}>
            <div className={s.row}>
                {lain1}
            </div>
            <div className={s.row}>
                {lain2}
            </div>
            <div className={s.row}>
                {lain3}
            </div>
        </div>
    )
}
export default SlotWndow