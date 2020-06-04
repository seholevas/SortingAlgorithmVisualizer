import * as actions from "../actions/types/buttons"
import * as actionss from "../actions/types/sliders"
import {generateArray} from '../../helpers/functions/GenerateArray'
export default function reducer(state = [], action)
{
    if(action.type === actions.PRESSED_START)
    {
        return  /// state!
        //generateArray(3,0,1)
    }
    else if(action.type === actions.PRESSED_SHUFFLE)
    {
        return ///state!
    }

    else if (action.type === actionss.CHANGED_SIZE)
    {
     return   
    }
    return state
}
