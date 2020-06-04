import * as action from "./types/buttons"


export function pressedStart(sort, array)
{
    return {
        type: action.PRESSED_START,
        payload: {
            // sort: sort,
            array: array
        }
    }
}


export function pressedStop(sort, array)
{
    return {
        type: action.PRESSED_STOP,
        payload: {
            // sort: sort,
            array: array
        }
    }
}


export function pressedShuffle(array)
{

    return {
        type: action.PRESSED_SHUFFLE,
        payload: {
            array: array
        }
    }
}

