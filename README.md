### The **Merge Sort** Algorithm

# Helpful Pre-Knowledge...
**Recursion**

The **Merge Sort** algorithm sorts arrays using *recursion*.  Recursion is a process in which a function is resolved when a specific condition is met by the reptition of an inner function.

**Time Complexity**
Calculating and understanding the time complexity of your function is beneficial...

**Merge Sort** has time complexity advantages, which will be explained below.

# What is the **Merge Sort** algorithm?
**Merge Sort** is a sorting algorithim that sorts an array by diving that orgiinal array into smaller subrrays, by sorting those smaller subarrays, then merging the sorted subarrays back into a single, final sorted array.   

# What does the **Merge Sort** algorithm look like?
Visually, the **Merge Sort** algorithim exemplifies a divide and conquer method.  

![Divide-And-Conquer-Array](DnCArray.gif)

If wwe start with an array of eight elements, the first divide will result in a subarray level with two arrays of four elements.  The next level of divison will result in four subarrys of two elements.  The divsion stops after all subarrays have been divded down to single element arrays. 

(insert of)

Did you notice how the divisions do *not* ocurr simultaneously?  This is important to recall when you see the recursive nature of the code. The **Merge Sort** algorithm "divides and conquers" the leftmost array, to completion, before proceeding to handling the next subarray.  A subarray is not considered "conquered" (or resolved) until the values of the subarrays beneath it have been sorted in ascending order, and emptied into the array at hand.

Note: If an array has an odd number of elements (meaning it won't divide evenly), the left subarray will contain the larger amount of elements, as shown in the animation below.

![Uneven-Array-Division](OddArray.gif)

After the merging of subarrays has resolved to two separately sorted arrays, the final merge sort can take place.  Starting with the leftmost elements of each array (index 0), the two elements are compared as we've previously seen demonstrated.  The lowest value is assigned to the first position of the final array. 

Note... The comparison will always occur between the leftmost values of each subarrays.  This means if the index 0 of the left and right arrays are compared resulting in the left array's index 0 as the lower value, it will be placed into the index 0 of the main array.  And the next round of comparisons will be between index 1 of the left array, and index 0 of the right array.  This comaprison continues until both subarrays are emppty, resulting in a completely sorted array. 

![Alt text](Final-Sorting.gif)
 
# How do you use **Merge Sort**?
*Insert Code Block*

# Why would you use **Merge Sort**?
**Merge sort** has a worst-case time complexity of O(NlogN).

# When is it best to use **Merge Sort**?
Need to sort a large dataset

# Key Takeaways

**Merge Sort** is:

**Stable!**
stable sorting algorithm, which means it maintains the relative order of equal elements in the input array.

**Speedy!**
Faster than insertion, bubble, and selection sort... but **Merge Sort** has a higher time complexity which can result in slower performance for very small datasets, which can be more efficently sorted with other methods.

**Super-Size Friendly & Space Hogging!**
Performs well on large datasets... but requires additional memory to temporarily store the merged sub-arrays created during the sorting process. 


##### Research & Sources
1) *DevSage* - **Best Javascript Recursion Explanation on YouTube** - https://www.youtube.com/watch?v=LteNqj4DFD8
2) *BroCode* - "**Learn Merge Sort in 13 Minutes**" - https://www.youtube.com/watch?v=3j0SWDX4AtU
3) *GeeksForGeeks* - **"Calculating Time Complexity | Data Structures and Algorithms"** - https://www.youtube.com/watch?v=KXAbAa1mieU
4) https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
5) https://www.geeksforgeeks.org/merge-sort/
