import { BubbleSort } from "../sorts/BubbleSort"
import {sleep} from "../helpers/functions/Sleep"
import { dispatchChangedArrayOrder } from "../redux/dispatchs/ChangedOrder";
import { Merge } from "../sorts/MergeSort";
import { SelectionSort } from "../sorts/SelectionSort";
import QuickSort from "../sorts/QuickSort";
import InsertionSort from "../sorts/InsertionSort"
import heapSort from "../sorts/HeapSort"
import { getValueByElementId } from "../helpers/functions/GetValue";

function getSort(array =[], key = "mergesort")
{
    if(key === "mergesort")
    {
        return Merge(array);
    }
    else if(key === "bubblesort")
    {
        return BubbleSort(array);
    }
    else if(key === "selectionsort")
    {
        return SelectionSort(array);
    }
    else if (key === "heapsort")
    {
        return heapSort(array)
    }
    else if(key === "insertionsort")
    {
        return InsertionSort(array);
    }
    else if(key === "quicksort")
    {
        return QuickSort(array);
    }
}


async function Sorting(array = [], key) {
    const generator = getSort(array, key);

    // const generator = BubbleSort(array);
    // const generator = Merge(array)
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
        await sleep(1000/ getValueByElementId("speed"));        
    }
    console.log("done")

}

export { Sorting }