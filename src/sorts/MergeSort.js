

function Merge(nums = [], start = 0, end = nums.length - 1) {
    if (start < end) {
        let middle = Math.floor((start + end) / 2);
        //merge for left side  
        Merge(nums, start, middle);
        // // merge for right side
        Merge(nums, middle + 1, end);

        // sorts left and right side
        return Sort(nums, start, middle, end);

    }
}

function Sort(nums = [], start, middle, end) {


    // will be the start of the left side of the array
    let i = start;
    // will be the start of the right side of the array
    let j = middle + 1;
    // will be the counter for the "in order" side of the array
    let k = start;
    // helper array
    let helper_array = new Array(end + 1);

    // initialize helper with values from nums. [0,1,2,...n]
    for (let count = 0; count <= end; count++) {
        helper_array[count] = nums[count];
    }
    // while the pointer i from the start array hasn't incremented to middle+1 (which is where j begins) [0,1,2,..., middle]
    // and j pointer is still pointing to an index of the array [middle+1, 4,5,...,n]
    while (i <= middle && j <= end) {
        // place value at index i to the first index that is unsorted in array
        if (helper_array[i] <= helper_array[j]) {
            nums[k] = helper_array[i];
            i++;

        }
        // else add j to the first index that is unsorted
        else {
            nums[k] = helper_array[j];
            j++;
        }
        // increment to the next leteger, which is now the first unsorted value in the array.
        k++;

    }
    // while the i half of the array has not reached the middle, add the rest of the values to the end of the array
    while (i <= middle) {
        nums[k] = helper_array[i];
        i++;
        k++;

    }

    // while the j half of the array has not reached the end, add the rest of the values to the end of the array
    while (j <= end) {
        nums[k] = helper_array[j];
        j++;
        k++;


    }

    return nums;
}

export { Merge }