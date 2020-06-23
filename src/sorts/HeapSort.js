const { swap } = require("../helpers/functions/Swap");

function* heapify(array =[], n=0, i= 0)
{
    let smallest = i;
    let l = 2*i+1
    let r = 2*i +2

    if (l < n && array[i] > array[l])
    {
        smallest = l
    }
    if(r < n && array[smallest] > array[r])
    {
        smallest = r;
    }

    if(smallest !== i)
    {
        console.log("swapped from heapify: ", [...array])
        yield swap([...array],i, smallest);
        yield* heapify(array, n, smallest)
    }

}

export default function* heapSort(array = [])
{
    yield [...array]
    let n = array.length;

    for(let i = parseInt(n/2 - 1); i >= 0; i--)
    {
        yield* heapify([...array], n, i);

    }

    for(let i = n-1; i > 0; i--)
    {
        yield swap([...array], 0, i);
        yield* heapify(array, i, 0);
    }
}