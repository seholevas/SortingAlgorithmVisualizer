import { swap } from "../helpers/functions/Swap";

export default function QuickSort(array = [])
{
    Sort(array, 0, array.length-1);
}

function Sort(array = [], left =0, right=array.length-1)
{
    if(left >= right)
    {
        return
    }
    let pivot = array[parseInt((left+right)/2)];
    let index = Partition(array, left, right, pivot);
    QuickSort(array, left, index-1);
   QuickSort(array, index, right); 
}

function Partition(array = [], left, right, pivot)
{
    while(left <= right)
    {
        while(array[left] < pivot)
        {
            left++
        }
        while(array[right] > pivot)
        {
            right--;
        }

        if(left <=right)
        {
            array = swap(array, left, right)
            left++;
            right--;
        }

        return left;
    }
}