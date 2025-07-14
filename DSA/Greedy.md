The `std::sort()` function in C++ (from `<algorithm>`) is a high-performance **comparison-based sorting algorithm**. Its internal implementation is a **hybrid sorting algorithm** known as:

**Introsort** = **QuickSort** + **HeapSort** + **InsertionSort**

| Algorithm     | Used For                          | Time Complexity  |
| ------------- | --------------------------------- | ---------------- |
| QuickSort     | Large data, average case          | O(n log n) avg   |
| HeapSort      | Deep recursion (avoid worst case) | O(n log n) worst |
| InsertionSort | Small data sets                   | O(n²), but fast  |

`std::stable_sort()` is a sorting function in C++ from the `<algorithm>` header that **preserves the relative order of equal elements** — hence the word **"stable"**

IMPORTANT QUESTIONS TO SOLVE :- 

[Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/)
[Reschedule Meetings for Maximum Free Time I](https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/)