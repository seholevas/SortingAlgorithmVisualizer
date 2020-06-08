import store from "../stores/store";
import { getValueByElementId } from "../../helpers/functions/GetValue";
import { generateArray } from "../../helpers/functions/GenerateArray";
import { changedSize } from "../actions/ArrayActionCreator";

export default function dispatchChangedArraySize() {
    const array = generateArray(getValueByElementId("size"));
    store.dispatch(changedSize(array));


}