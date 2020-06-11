import * as btnActions from "../actions/types/buttons"
import * as sliderActions from "../actions/types/sliders"
import * as utilActions from "../actions/types/util"
export default function reducer(state = [3, 1, 2, 3, 4, 5, 6, 5], action) {

    if (action.type === btnActions.PRESSED_SHUFFLE) {
        return action.payload.array;
    }

    else if (action.type === sliderActions.CHANGED_SIZE) {
        return action.payload.array;
    }

    else if (action.type === utilActions.CHANGED_ARRAY_ELEMENTS_ORDER) {
        return action.payload.array
    }



    return state;
}
