import * as btnActions from "./types/buttons"
import * as sliderActions from "./types/sliders"
import * as utilActions from "./types/util"

export function changedSize(array) {
    return {
        type: sliderActions.CHANGED_SIZE,
        payload: {
            array: array
        }
    }
}

export function pressedShuffle(array) {

    return {
        type: btnActions.PRESSED_SHUFFLE,
        payload: {
            array: array
        }
    }
}

export function changedOrder(array) {
    return{
        type: utilActions.CHANGED_ARRAY_ELEMENTS_ORDER,

            payload: {
            array: array
        }
    }
}

