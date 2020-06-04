import * as actions from "../actions/types/sliders"
// import {generateArray} from '../../helpers/generate.array'
export default function reducer(state = 3, action)
{
    if(action.type === actions.CHANGED_SIZE)
    {
        // alert(state)
        return  state
    }
    else if(action.type === actions.CHANGED_SPEED)
    {
        // alert(action.payload.array)
        // console.log(action.payload.array)
        return state
    }
    return state
}