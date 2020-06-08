import * as btnActions from "./types/buttons"
import * as sliderActions from "./types/sliders"


// export function pressedStart(sort, array)
// {
//     return {
//         type: action.PRESSED_START,
//         payload: {
//             // sort: sort,
//             array: array
//         }
//     }
// }


// export function pressedStop(sort, array)
// {
//     return {
//         type: action.PRESSED_STOP,
//         payload: {
//             // sort: sort,
//             array: array
//         }
//     }
// }
export function changedSize(array)
{
    return {
        type: sliderActions.CHANGED_SIZE,
        payload: {
            array: array
        }
    }
}

export function pressedShuffle(array)
{

    return {
        type: btnActions.PRESSED_SHUFFLE,
        payload: {
            array: array
        }
    }
}

