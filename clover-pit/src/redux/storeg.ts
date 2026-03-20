import { images } from '../assets/images';
const NEW_ROLL = 'NEW_ROLL'
const WINDOW_ROUNDS = 'WINDOW_ROUNDS'
export interface Symvol {
    id: number
    name: string
    value: number
    weight: number
    img: string
}

type Action = NewRollAction | StatusRoundsWindow


interface NewRollAction {
    type: typeof NEW_ROLL
    symvols: Symvol[]
}

interface StatusRoundsWindow {
    type: typeof WINDOW_ROUNDS
    window: number
}

let store = {
    _state: {
        simvolPage: {
            simvols: [
                { id: 1, name: 'lemone', value: 2, weight: 19.4, img: images.lemone },
                { id: 2, name: 'vihenki', value: 2, weight: 19.4, img: images.vihenki },
                { id: 3, name: 'klever', value: 3, weight: 14.9, img: images.klever },
                { id: 4, name: 'kolokol', value: 3, weight: 14.9, img: images.kolokol },
                { id: 5, name: 'klubnika', value: 5, weight: 11.9, img: images.klubnika },
                { id: 6, name: 'monetka', value: 5, weight: 11.9, img: images.monetka },
                { id: 7, name: 'sorokDva', value: 7, weight: 7.5, img: images.sorokDva },
            ],
            newSimvol: {},
            newRoll: [] as Symvol[],
        },
        balances: {
            balance: 13,
        },
        round: {
            round7: 7,
            round3: 3,
        },
        rols: {
            roundWindow: {
                game: 1,
                choosingRoles: 2,
                round: 3,
            },
            statusRoundWindow: 1
        }
    },
    _subscribers: [] as Array<() => void>,
    
    getState() {
        return this._state
    },
    
    subscribe(callback: () => void) {
        this._subscribers.push(callback);
        return () => {
            this._subscribers = this._subscribers.filter(sub => sub !== callback);
        };
    },
    
    dispatch(action: Action) {
        if (action.type === NEW_ROLL) {
            this._state = {
                ...this._state,
                simvolPage: {
                    ...this._state.simvolPage,
                    newRoll: action.symvols,
                }
            }
        } else if (action.type === WINDOW_ROUNDS) {
            this._state = {
                ...this._state,
                rols:{
                    ...this._state.rols,
                    statusRoundWindow: action.window
                }
            }
        }
        
        // Уведомляем всех подписчиков об изменении
        this._subscribers.forEach(sub => sub());
    }
}

export const newRollActionCreator = (symvols: Symvol[]): NewRollAction => ({
    type: NEW_ROLL,
    symvols: symvols
});

export const statusRoundsWindow = (window: number): StatusRoundsWindow => ({
    type: WINDOW_ROUNDS,
    window: window
});


export default store;