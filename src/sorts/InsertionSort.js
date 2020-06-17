import { swap } from "../helpers/functions/Swap"

export default function* InsertionSort(arr = []) {
    yield arr
        for (let i=1; i < arr.length; ++i)
        {
            console.log("i: ", i)
            let key = arr[i];
            let j = i-1;
            
            /* Move elements of arr[0..i-1], that are
            greater than key, to one position ahead
            of their current position */
            while (j>=0 && arr[j] > key)
            {
                arr[j+1] = arr[j];
                j = j-1;
            }
            arr[j+1] = key;
            yield [...arr]
        }
}