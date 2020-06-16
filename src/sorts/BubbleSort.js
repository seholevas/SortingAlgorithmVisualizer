import { swap } from "../helpers/functions/Swap";

function* BubbleSort(array = []) {
    yield [...array]

    let end = array.length - 1;
    for (let i = 0; i < end; i++) {

        // yield array[i]
        for (let j = 0; j < end - i; j++) {
            if (array[j] > array[j + 1]) {
                array = swap([...array], j, j + 1);
                yield array
            }
        }
    }
    return array
}

export { BubbleSort }