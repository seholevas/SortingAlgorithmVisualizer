import store from "../stores/store";
import { pressedStop } from "../actions/SettingsActionCreator";

export default function dispatchSortStopped() {
    store.dispatch(pressedStop());
}