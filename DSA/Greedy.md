The `std::sort()` function in C++ (from `<algorithm>`) is a high-performance **comparison-based sorting algorithm**. Its internal implementation is a **hybrid sorting algorithm** known as:

**Introsort** = **QuickSort** + **HeapSort** + **InsertionSort**

| Algorithm     | Used For                          | Time Complexity  |
| ------------- | --------------------------------- | ---------------- |
| QuickSort     | Large data, average case          | O(n log n) avg   |
| HeapSort      | Deep recursion (avoid worst case) | O(n log n) worst |
| InsertionSort | Small data sets                   | O(n²), but fast  |

`std::stable_sort()` is a sorting function in C++ from the `<algorithm>` header that **preserves the relative order of equal elements** — hence the word **"stable"**

*Line Sweep Algorithm* 
- Make a new array using below 2 rules
- start time push {start_time, 1}
- end time push {end_time+1, -1}, if end_time is included 
- maintain interval such that start_time is included and end_time is excluded 
- sort the array that way we'll get the start time earlier and end time later  and also all the start time which are before end_time will comes first. 

IMPORTANT QUESTIONS TO SOLVE :- 

[Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/)
[Reschedule Meetings for Maximum Free Time I](https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/)
[Maximum Frequency of an Element After Performing Operations II](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/)
[Two Best Non-Overlapping Events](https://leetcode.com/problems/two-best-non-overlapping-events/)