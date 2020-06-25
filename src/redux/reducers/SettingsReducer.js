import * as btnActions from "../actions/types/buttons"

export default function reducer(state = false, action)
{
    if(action.type === btnActions.PRESSED_START)
    {
        return  action.payload.isStarted
    }
    else if(action.type === btnActions.PRESSED_STOP)
    {
        return  action.payload.isStarted
    }
    return state
}