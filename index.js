function createSubArrays(array) {
    // create a base case for if an array length is 1, meaning it is technically already sorted
    if (array.length === 1) {
        return array;
    }

    // initialize a variable to determine the middle value, which will be the splitting point for creating two subarrays
    const middleIndexValue = Math.ceil(array.length/2); // Math.ceil will result in the left array having the higher amount of vvalues, in the event that the input array has an uneven amount of values
    const leftArray = array.slice(0, middleIndexValue); // starting from the first index of the input array, up to but not including the index of the middle index value, create the left array
    const rightArray = array.slice(middleIndexValue); // starting from the index of the middle index value, including the remainder of the input array, create the right array

    // call the mergeSort function on both the newly created left and right arrays.  the result will be two separate arrays, which we will need to input into a helper function that will create one final, sorted array.
    return mergeTwoSubArrays(createSubArrays(leftArray), createSubArrays(rightArray));
}

function mergeTwoSubArrays(leftArray, rightArray) {
    //intitalize an array for sorted subarrays to place their values (merge)
    let mergedValues = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // create a while loop that comapres the values of the elft and right arrays.  if one is greater than the other, place that value into the mergedValue array, and increase the index value for the array whose value was just removed so that the next value in its array will be compared to the opposing subarray
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            mergedValues.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            mergedValues.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    // eventually there will be an array that does not have anything, so the while looop cannot continue to compare left and right arrays.  This return creates a final merge of the mergedValues array that resulted from comparisons, with the remainder of the subarrays.  One of the arrays will evalute to an empty array.
    return mergedValues.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));

}

console.log(createSubArrays([1, 9, 7, 5, 6, 8, 3, 4, 10, 50, 0]));