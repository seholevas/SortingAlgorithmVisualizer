// import store from "../../redux/stores/store";
// import { changedOrder } from "../../redux/actions/ArrayActionCreator";
// import {sleep} from "../functions/Sleep"
export async function swap (array =[], i, j)
{
    
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    // sleep(3000);
    return array;
}