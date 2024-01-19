## The Merge Sort Algorithm

### What you should know...
Recursion

The mergeSort algorithm sorts arrays using recursion.  Recursion is a process in which a function is resolved by the reptition of an inner function, until that innerfunction resolves by meeting a specific condition.

### What is the merge sort algorithm?
mergeSort is a sorting algorithim that sorts an array by diving that orgiinal array into smaller subrrays, by sorting those smaller subarrays, then merging the sorted subarrays back into a single, final sorted array.   

### What does the merge sort algorithm look like?
Visually, the mergeSort algorithim exemplifies a divide and conquer method.  

If wwe start with an array of eight elements, the first divide will result in a subarray level with two arrays of four elements.  The next level of divison will result in four subarrys of two elements.  The final divsion will result in eight separate arrays, each contnaing a single value.

Keep in mind... these divisions are not ocurring simultaneously.  The mergeSort "divides and conquers" the leftmost array, to completion, before proceeding to handling the next subarray.  A subarray is not considered "conquered" (or resolved) until the values of the subarrays beneath it have been sorted in ascending order, and emptied into the array at hand.  

### How do you use mergeSort?
Step - by - step code walkthrough

### Why would you use merge sort?
	time/space complexity & Big O Evaluation
		O(n)
	types of data

### When is it best to use merge sort?
	real world application

### Key Takeaways
	-faster than insertion, bubble, and selection sort
	-uses more space
	- edge cases and constraints