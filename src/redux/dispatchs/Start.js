import store from "../stores/store";
import {pressedStart } from "../actions/SettingsActionCreator";

export default function dispatchSortStarted() {
    store.dispatch(pressedStart());
}