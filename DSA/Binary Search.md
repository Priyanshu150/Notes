Pattern based on BS :- 

1. Standard Binary Search 
2. Lower Bound(First Occurrence) & Upper Bound (Last Occurrence)
3. Binary Search on Answers (Search Space Reduction)
4. Search in a rotated array 
5. Search in Infinite sorted array
6. Divide and Conquer 
	-  Median of Two Sorted Array 
	- Kth smallest/largest element in two sorted array 

✅`lower_bound(begin, end, value)`  :- Returns an iterator pointing to the **first element ≥ value**

✅ `upper_bound(begin, end, value)` :-  Returns an iterator pointing to the **first element > value**

| Task                            | Function                                         |
| ------------------------------- | ------------------------------------------------ |
| Check if element exists         | `lower_bound()` and compare value                |
| Count occurrences               | `upper_bound() - lower_bound()`                  |
| Insert position in sorted array | `lower_bound()` gives correct place              |
| Range queries                   | Find range [L, R] efficiently                    |
| Floor / Ceil logic              | `lower_bound` for **ceil**, custom for **floor** |
Important questions :- 

[Median in a row-wise sorted Matrix](https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1)
[Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/)
[Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
[Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)
[Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)