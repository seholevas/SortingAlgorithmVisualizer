import { BubbleSort } from "../sorts/BubbleSort"
import {sleep} from "../helpers/functions/Sleep"
import { dispatchChangedArrayOrder } from "../redux/dispatchs/ChangedOrder";
import { Merge } from "../sorts/MergeSort";
import { SelectionSort } from "../sorts/SelectionSort";
import QuickSort from "../sorts/QuickSort";


async function Sorting(array = []) {
    // const generator = BubbleSort(array);
    // const generator = Merge(array)
    const generator = SelectionSort(array);
    // const generator = QuickSort(array)
    let result = generator.next();

    while (!result.done) {
        let value = result.value
        console.log(value)
        dispatchChangedArrayOrder(value);
        result = generator.next();
        await sleep(1000);        
    }

}

export { Sorting }