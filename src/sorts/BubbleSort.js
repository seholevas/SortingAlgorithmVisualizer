import { swap } from "../helpers/functions/Swap";
import { changedArrayOrderDispatch } from "../redux/dispatchs/ChangedOrder";

async function BubbleSort(array = []) {
    
    let end = array.length - 1;
    for (let i = 0; i < end; i++) {
        for (let j = 0; j < end - i; j++) {
            if (array[j] > array[j + 1]) {
                array = await swap(array, j, j + 1);
                await changedArrayOrderDispatch(array)
            }                
        }

    }

    return await array;
}

export { BubbleSort }