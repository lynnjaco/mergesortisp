function createSubArrays(array) {

    // create a base case for if an array length is 1, meaning it is technically already sorted
    if (array.length === 1) {
        return array;
    }

    // initialize a variable to determine the middle value, which will be the splitting point for creating two subarrays
    const middleIndexValue = Math.ceil(array.length/2); // Math.ceil will result in the left array having the higher amount of vvalues, in the event that the input array has an uneven amount of values
    const leftArray = array.slice(0, middleIndexValue); // starting from the first index of the input array, up to but not including the index of the middle index value, create the left array
    const rightArray = array.slice(middleIndexValue); // starting from the index of the middle index value, including the remainder of the input array, create the right array

    // call the mergeTwoSubArrays function with the left and right arrays created from the createSubArrays function, as parameters.  The result will be two separate arrays, which we will need to use as parameters in a helper function that will create one final, sorted array.
    return mergeTwoSubArrays(createSubArrays(leftArray), createSubArrays(rightArray));
}

//create helper function to merge two sorted arrays with two parameters of the left and right arrays
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

    //create a final merge of the sorted arrays from mergedValues
    return mergedValues.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

console.log(createSubArrays( [1, 9, 17, 5, 26, 8, 13, 4, 10, 15] ));