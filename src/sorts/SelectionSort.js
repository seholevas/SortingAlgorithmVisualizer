import { swap } from "../helpers/functions/Swap"

function* SelectionSort(array = []) {
    yield [...array]

    for (let i = 0; i < array.length - 1; i++) {
        let minimum_index = i
        // console.log("i: ", i)

        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[minimum_index]) {
                minimum_index = j;
            }
            // console.log("j: ", j)

        }
        if (minimum_index !== i) {
            array = swap([...array], i, minimum_index);
            yield array
        }
    }
    return array
}

export { SelectionSort }