import { swap } from "../helpers/functions/Swap";

function BubbleSort(array = []) {
    let end = array.length - 1;
    for (let i = 0; i < end; i++) {
        for (let j = 0; j < end - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }

    return array;
}

export { BubbleSort }