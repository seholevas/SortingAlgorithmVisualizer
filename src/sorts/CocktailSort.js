// function A = cocktailShakerSort(A)
// % `beginIdx` and `endIdx` marks the first and last index to check
// beginIdx = 1;
// endIdx = length(A) - 1;
// while beginIdx <= endIdx
//     newBeginIdx = endIdx;
//     newEndIdx = beginIdx;
//     for ii = beginIdx:endIdx
//         if A(ii) > A(ii + 1)
//             [A(ii+1), A(ii)] = deal(A(ii), A(ii+1));
//             newEndIdx = ii;
//         end
//     end

//     % decreases `endIdx` because the elements after `newEndIdx` are in correct order
//     endIdx = newEndIdx - 1;

//     for ii = endIdx:-1:beginIdx
//         if A(ii) > A(ii + 1)
//             [A(ii+1), A(ii)] = deal(A(ii), A(ii+1));
//             newBeginIdx = ii;
//         end
//     end
//     % increases `beginIdx` because the elements before `newBeginIdx` are in correct order
//     beginIdx = newBeginIdx + 1;
// end
// end