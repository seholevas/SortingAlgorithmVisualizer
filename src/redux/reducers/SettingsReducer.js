import * as sliderActions from "../actions/types/sliders"
import * as dropdownActions from "../actions/types/sortlist"
// import {generateArray} from '../../helpers/generate.array'
export default function reducer(state = 3, action)
{
    if(action.type === dropdownActions)
    {
        // alert(state)
        return  state
    }
    else if(action.type === sliderActions.CHANGED_SPEED)
    {
        // alert(action.payload.array)
        // console.log(action.payload.array)
        return state
    }
    return state
}