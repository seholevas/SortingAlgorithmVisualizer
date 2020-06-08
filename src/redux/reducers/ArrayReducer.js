import * as btnActions from "../actions/types/buttons"
import * as sliderActions from "../actions/types/sliders"
export default function reducer(state = [3, 1, 2, 3, 4, 5, 6, 5], action) {

    if (action.type === btnActions.PRESSED_SHUFFLE) {
        // return generateArray(getValue("size"))///state!
        return action.payload.array;
    }

    else if (action.type === sliderActions.CHANGED_SIZE) {
        // return generateArray(getValue("size"))
        return action.payload.array;
    }
    return state;
}
