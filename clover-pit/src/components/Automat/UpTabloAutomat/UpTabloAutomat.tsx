import s from './UpTabloAutomat.module.css';
import store from '../../../redux/storeg';
const UpTabloAutomat = () => {
    let round7  = store.getState().round.round7
    let round = [] 
    round.push(
        <div>количество раундов:{round7} цена: {round7}</div>
    )
    return (
        <div className={s.displeiData}>
            {round}
        </div>
    )
}
export default UpTabloAutomat