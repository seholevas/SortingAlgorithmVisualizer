import { BubbleSort } from "./BubbleSort"
import { sleep } from "../helpers/functions/Sleep"
import { dispatchChangedArrayOrder } from "../redux/dispatchs/ChangedOrder";
import { Merge } from "./MergeSort";
import { SelectionSort } from "./SelectionSort";
import QuickSort from "./QuickSort";
import InsertionSort from "./InsertionSort"
import heapSort from "./HeapSort"
import { getValueByElementId } from "../helpers/functions/GetValue";
import store from "../redux/stores/store";
import dispatchSortStopped from "../redux/dispatchs/Stop";
import dispatchSortStarted from "../redux/dispatchs/Start";

function getSort(array = [], type = "mergesort") {
    if (type === "mergesort") {
        return Merge(array);
    }
    else if (type === "bubblesort") {
        return BubbleSort(array);
    }
    else if (type === "selectionsort") {
        return SelectionSort(array);
    }
    else if (type === "heapsort") {
        return heapSort(array)
    }
    else if (type === "insertionsort") {
        return InsertionSort(array);
    }
    else if (type === "quicksort") {
        return QuickSort(array);
    }
}


async function Sorting() {
    const array = await store.getState().array
    let playing = await store.getState().settings

    if (playing) {
        return
    }

    dispatchSortStarted()
    playing = await store.getState().settings


    const sortingType = getValueByElementId("sort");
    const generator = getSort(array, sortingType);

    let result = generator.next();

    while (!result.done && playing) {

        let value = result.value
        console.log("value: ", value)
        dispatchChangedArrayOrder(value);
        result = generator.next();
        await sleep(1000 / getValueByElementId("speed"));
        playing = await store.getState().settings
    }
    dispatchSortStopped()
    console.log("done")

}

export { Sorting }