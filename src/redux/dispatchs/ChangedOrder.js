import store from "../stores/store"
import { changedOrder } from "../actions/ArrayActionCreator"
function dispatchChangedArrayOrder(array = []) {
    store.dispatch(changedOrder(array));
}

export { dispatchChangedArrayOrder }