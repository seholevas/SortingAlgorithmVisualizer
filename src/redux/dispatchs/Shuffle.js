import store from "../stores/store";
import { generateArray } from "../../helpers/functions/GenerateArray";
import { getValueByElementId } from "../../helpers/functions/GetValue";
import { pressedShuffle } from "../actions/ArrayActionCreator";
export default function dispatchArrayShuffle() {
    const array = generateArray(getValueByElementId("size"));

    store.dispatch(pressedShuffle(array));


}