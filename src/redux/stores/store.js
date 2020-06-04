import {createStore} from 'redux'
import combinedReducers from '../reducers/CombinedReducers';
const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;