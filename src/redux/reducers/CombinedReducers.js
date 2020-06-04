
import {combineReducers} from 'redux'
import arrayReducer from './ArrayReducer'
import settingsReducer from './SettingsReducer'


const combinedReducers = combineReducers({
    array: arrayReducer,
    settings: settingsReducer,
});
export default combinedReducers
