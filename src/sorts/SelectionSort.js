import { swap } from "../helpers/functions/Swap"

function* SelectionSort(array = []) {
    yield [...array]

    // console.log([...array].length)
    for (let i = 0; i < array.length - 1; i++) {
        let minimum_index = i
        console.log("i: ", i)

        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[minimum_index]) {
                minimum_index = j;
            }
            console.log("j: ", j)

        }
        if (minimum_index !== i) {
            array = swap([...array], i, minimum_index);
            yield array
        }
    }
    console.log("done");
    return array

























    // // pointer for min index
    // // console.log(array)
    // let min_index = 0;
    // let end = array.length - 1
    // // for each element in array
    // for (let i = 0; i < array.length; i++) {
    //     // for each element in the array after i
    //     for (let j = i + 1; j < array.length; j++) {
    //         // if element j is < current minimum element
    //         if (array[j] < array[min_index]) {
    //             // minimum element index is now j
    //             min_index = j;
    //         }
    //     }
    //     // if index of minimum element is not the current index of i, swap the elements.
    //     // index i will always be moving forward, so every element before index i is sorted.
    //     if (min_index !== i) {
    //         swap(array, min_index, i);
    //     }
    // }
    // return array
}

export { SelectionSort }