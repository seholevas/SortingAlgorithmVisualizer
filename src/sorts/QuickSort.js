import { swap } from "../helpers/functions/Swap";

export default function* QuickSort(array = [], left = 0, right = array.length - 1) {
    yield [...array]
    if (left < right) {

        // console.log("array: ", array)
        // console.log("left: ", left)
        // console.log("right: ", right)
        const pivot = array[parseInt((left + right) / 2, 10)];
        // console.log("pivot: ", pivot);

        // while(!result.done)
        // {
        //     let value = result.value;
        //     yield value;
        //     result = generator.next();
        // }

        // while (left <= right) {
        //     while (array[left] < pivot) {
        //         left++;
        //         console.log("array[left] < pivot - left++: ", left, array[left])
        //     }
        //     while (array[right] > pivot) {

        //         right--;
        //         console.log("array[right] > pivot right--: ", right, array[right])
        //     }

        //     if (left <= right) {
        //         array = swap([...array], left, right);
        //         yield [...array];
        //         left++;
        //         console.log("left++: ", left)
        //         right--;
        //         console.log("right--: ", right)
        //     }
        //     console.log("out of loop, left index <= right index")
        //     let index = 0;
        //     index = left;
        let index = findIndex(array, left, right, pivot);
        yield* partition(array, left, right, pivot);
        console.log("index: ", index)
        yield* QuickSort([...array], left, index-1);
        yield* QuickSort([...array], index+1, right)
    }
}

function findIndex(array = [], left, right, pivot) {
    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }

        if (left <= right) {
            let temp = swap([...array], left, right);
            left++;
            right--;
        }
    }
    return left
}

function* partition(array = [], left, right, pivot) {
    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }

        if (left <= right) {
            var temp = swap([...array], left, right);
            yield temp;
            left++;
            right--;
        }
        return [...temp]

    }
    // return left;
    // setIndex(left)
}

// function setIndex(int)
// {
    // index = int;
// }
// function getIndex()
// {
    // return index;
// }