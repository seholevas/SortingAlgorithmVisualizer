

function* Merge(nums = [], start = 0, end = nums.length - 1) {
    // yield [...nums]
    if (end > start) {
        let middle = Math.floor((start + end) / 2);
        //merge for left side  
        yield* Merge([...nums], start, middle);
        // // merge for right side
        yield* Merge([...nums], middle + 1, end);

        // sorts left and right side
        yield* Sort(nums, start, middle, end);

    }
}

function* Sort(nums = [], start, middle, end) {
    // // will be the start of the left side of the nums
    // let i = start;
    // // will be the start of the right side of the nums
    // let j = middle + 1;
    // // will be the counter for the "in order" side of the nums
    // let k = start;

    // // initialize helper nums
    // let helper_array = [...nums]

    // // while the pointer i from the start nums hasn't incremented to middle+1 (which is where j begins) [0,1,2,..., middle]
    // // and j pointer is still pointing to an index of the nums [middle+1, 4,5,...,n]
    // while (i <= middle && j <= end) {    // // initialize helper with values from nums. [0,1,2,...n]
    //     // for (let count = 0; count <= end; count++) {
    //     //     helper_array[count] = nums[count];
    //     // }
    //     // place value at index i to the first index that is unsorted in nums
    //     if (helper_array[i] <= helper_array[j]) {
    //         nums[k] = helper_array[i];
    //         i++;

    //     }
    //     // else add j to the first index that is unsorted
    //     else {
    //         nums[k] = helper_array[j];
    //         j++;
    //     }
    //     // increment to the next leteger, which is now the first unsorted value in the nums.
    //     k++;


    // }
    // // while the i half of the nums has not reached the middle, add the rest of the values to the end of the nums
    // while (i <= middle) {
    //     nums[k] = helper_array[i];
    //     i++;
    //     k++;

    // }

    // // while the j half of the nums has not reached the end, add the rest of the values to the end of the nums
    // while (j <= end) {
    //     nums[k] = helper_array[j];
    //     j++;
    //     k++;


    // }

    // yield [...nums];

      // Find sizes of two subarrays to be merged 
      let n1 = middle - start + 1; 
      let n2 = end - middle; 

      /* Create temp arrays */
      let L = new Array(n1); 
      let R = new Array(n2); 

      /*Copy data to temp arrays*/
      for (let i = 0; i < n1; ++i) 
          L[i] = nums[start + i]; 
      for (let j = 0; j < n2; ++j) 
          R[j] = nums[middle + 1 + j]; 

      /* Merge the temp arrays */

      // Initial indexes of first and second subarrays 
      let i = 0;
      let j = 0; 

      // Initial index of merged subarry nums 
      let k = start; 
      while (i < n1 && j < n2) { 
          if (L[i] <= R[j]) { 
              nums[k] = L[i]; 
              i++; 
          } 
          else { 
              nums[k] = R[j]; 
              j++; 
          } 
          k++; 
      } 

      /* Copy remaining elements of L[] if any */
      while (i < n1) { 
          nums[k] = L[i]; 
          i++; 
          k++; 
      } 

      /* Copy remaining elements of R[] if any */
      while (j < n2) { 
          nums[k] = R[j]; 
          j++; 
          k++; 
      }

      yield [...nums]

}

export { Merge }