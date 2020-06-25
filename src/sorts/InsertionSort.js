import { swap } from "../helpers/functions/Swap";

export default function* InsertionSort(array = []) {
    yield [...array]

    for (var i = 1; i < array.length; i++) {
        // console.log("[i] in first loop:", i);
        for (var j = i; j > 0; j--) {
            // console.log("[j] in second loop ", j)
            // console.log("[j-1] in second loop ", j - 1)

            if (array[j] < array[j - 1]) {
                // console.log("swapping [j-1] and [j]", array[j - 1], array[j])
                array = swap([...array], j, j - 1);
                yield array
            }
        }
    }
    return [...array]

}
