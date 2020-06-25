import { BubbleSort } from "../sorts/BubbleSort"
import {sleep} from "../helpers/functions/Sleep"
import { dispatchChangedArrayOrder } from "../redux/dispatchs/ChangedOrder";
import { Merge } from "../sorts/MergeSort";
import { SelectionSort } from "../sorts/SelectionSort";
import QuickSort from "../sorts/QuickSort";
import InsertionSort from "../sorts/InsertionSort"
import heapSort from "../sorts/HeapSort"
import { getValueByElementId } from "../helpers/functions/GetValue";
import store from "../redux/stores/store";

function getSort(array =[], type = "mergesort")
{
    if(type === "mergesort")
    {
        return Merge(array);
    }
    else if(type === "bubblesort")
    {
        return BubbleSort(array);
    }
    else if(type === "selectionsort")
    {
        return SelectionSort(array);
    }
    else if (type === "heapsort")
    {
        return heapSort(array)
    }
    else if(type === "insertionsort")
    {
        return InsertionSort(array);
    }
    else if(type === "quicksort")
    {
        return QuickSort(array);
    }
}


async function Sorting() {
    const test = await store.getState().array
    console.log("test: ", test)
    const sortingType = getValueByElementId("sort");
    const generator = getSort(test, sortingType);
    
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