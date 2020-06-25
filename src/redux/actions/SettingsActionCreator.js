import * as btnActions from "./types/buttons"

export function pressedStop() {
    return {
        type: btnActions.PRESSED_STOP,
        payload: {
            isStarted: false
        }
    }
}

export function pressedStart() {
    return {
        type: btnActions.PRESSED_START,
        payload: {
            isStarted: true
        }
    }
}