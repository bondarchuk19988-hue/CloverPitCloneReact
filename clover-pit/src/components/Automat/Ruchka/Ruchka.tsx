import s from './Ruchka.module.css';
import ruchkaImage from '../../../assets/automat/ruchka.svg';
import store, { newRollActionCreator } from '../../../redux/storeg';

interface Symvol {
    id: number
    name: string
    value: number
    weight: number
    img: string
}

const Ruchka = () => {
    let spen = () => {
        let newSymvols: Symvol[] = [];
        for (let i = 0; i < 15; i++) {
            let randomNum = Math.floor(Math.random() * 100) + 1
            let selectedSymbol: Symvol

            if (randomNum >= 1 && randomNum <= 19.4) {
                selectedSymbol = { ...store.getState().simvolPage.simvols[0] }
            }
            else if (randomNum > 19.4 && randomNum <= 38.8) {
                selectedSymbol = { ...store.getState().simvolPage.simvols[1] }
            }
            else if (randomNum > 38.8 && randomNum <= 53.7) {
                selectedSymbol = { ...store.getState().simvolPage.simvols[2] }
            }
            else if (randomNum > 53.7 && randomNum <= 68.6) {
                selectedSymbol = { ...store.getState().simvolPage.simvols[3] }
            }
            else if (randomNum > 68.6 && randomNum <= 80.5) {
                selectedSymbol = { ...store.getState().simvolPage.simvols[4] }
            }
            else if (randomNum > 80.5 && randomNum <= 92.4) {
                selectedSymbol = { ...store.getState().simvolPage.simvols[5] }
            }
            else {
                selectedSymbol = { ...store.getState().simvolPage.simvols[6] }
            }
            newSymvols.push(selectedSymbol)
        }
        store.dispatch(newRollActionCreator(newSymvols))
        console.log(store.getState().simvolPage.newRoll)
        
    }

    return (
        <div>
            <img className={s.ruchka} src={ruchkaImage} draggable="false"></img>
            <button className={s.ruchkabut} onClick={spen}></button>
        </div>
    )
}
export default Ruchka