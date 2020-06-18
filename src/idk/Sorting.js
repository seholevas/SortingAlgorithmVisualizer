import { BubbleSort } from "../sorts/BubbleSort"
import {sleep} from "../helpers/functions/Sleep"
import { dispatchChangedArrayOrder } from "../redux/dispatchs/ChangedOrder";
import { Merge } from "../sorts/MergeSort";
import { SelectionSort } from "../sorts/SelectionSort";
import QuickSort from "../sorts/QuickSort";
import InsertionSort from "../sorts/InsertionSort"
import heapSort from "../sorts/HeapSort"

async function Sorting(array = []) {
    console.log(Merge(array))
    // const generator = BubbleSort(array);
    const generator = Merge(array)
    // const generator = heapSort(array)
    // const generator = InsertionSort(array)
    // const generator = SelectionSort(array);
    // const generator = QuickSort(array)
    let result = generator.next();

    while (!result.done) {
        let value = result.value
        console.log("value: ", value)
        dispatchChangedArrayOrder(value);
        result = generator.next();
        await sleep(1000);        
    }
    console.log("done")

}

export { Sorting }