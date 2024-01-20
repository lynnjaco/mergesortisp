## The **Merge Sort** Algorithm

### Helpful Pre-Knowledge...
**Recursion**

The **Merge Sort** algorithm sorts arrays using recursion.  Recursion is a process in which a function is resolved by the reptition of an inner function, until that innerfunction resolves by meeting a specific condition.

**Time Complexity**
Calculating and understanding the time complexity of your function is beneficial...

**Merge Sort** has time complexity advantages, which will be explained below.

### What is the **Merge Sort** algorithm?
**Merge Sort** is a sorting algorithim that sorts an array by diving that orgiinal array into smaller subrrays, by sorting those smaller subarrays, then merging the sorted subarrays back into a single, final sorted array.   

### What does the **Merge Sort** algorithm look like?
Visually, the **Merge Sort** algorithim exemplifies a divide and conquer method.  

If wwe start with an array of eight elements, the first divide will result in a subarray level with two arrays of four elements.  The next level of divison will result in four subarrys of two elements.  The final divsion will result in eight separate arrays, each contnaing a single value.

![Alt text](DnCArray.gif)

Note: If an array has an odd number of elements (meaning it won't divide evenly), the left subarray will contain the larger amount of elements, as shown in the animation below.

![Uneven-Array-Division](OddArray.gif)

Keep in mind... these divisions are not ocurring simultaneously.  The **Merge Sort** "divides and conquers" the leftmost array, to completion, before proceeding to handling the next subarray.  A subarray is not considered "conquered" (or resolved) until the values of the subarrays beneath it have been sorted in ascending order, and emptied into the array at hand.  

### How do you use **Merge Sort**?
Step - by - step code walkthrough

### Why would you use **Merge Sort**?
**Merge sort** has a worst-case time complexity of O(N logN).

### When is it best to use **Merge Sort**?
Need to sort a large dataset


### Key Takeaways

**Merge Sort** is:

**Stable!**
stable sorting algorithm, which means it maintains the relative order of equal elements in the input array.

**Speedy!**
Faster than insertion, bubble, and selection sort... but **Merge Sort** has a higher time complexity which can result in slower performance for very small datasets, which can be more efficently sorted with other methods.

**Super-Size Friendly & Space Hogging!**
Performs well on large datasets... but requires additional memory to temporarily store the merged sub-arrays created during the sorting process. 


#### Research Sources
1) *DevSage* - **Best Javascript Recursion Explanation on YouTube** - https://www.youtube.com/watch?v=LteNqj4DFD8
2) *BroCode* - "**Learn Merge Sort in 13 Minutes**" - https://www.youtube.com/watch?v=3j0SWDX4AtU
3) *GeeksForGeeks* - **"Calculating Time Complexity | Data Structures and Algorithms"** - https://www.youtube.com/watch?v=KXAbAa1mieU
4) https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
5) https://www.geeksforgeeks.org/merge-sort/
