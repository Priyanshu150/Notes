Two ways to approach such type of problem :- 

1. Sorting  :-
	- Sort the array and try to solve it using intuitive method.
	- Hash the value sometimes it can help in such cases.
	- Try to move left and right pointer depending on the analysis
	- Sometime #prefix_sum method can be used to solve such problem
	- In case of sum, place the pointer at extreme end 0 & n-1
	- In case of difference, place the pointer adjacent to each other i & i+1
	- Instead of finding neg target find the positive one 

2. Sliding Window :-
	- Declare two pointer and move the window accordingly as per condition.
	- Number of subarray b/w i & j will (j - i + 1)
	- If problem is asking for at most or greater than target value accumulate the answer from direct formula
	- If problem is asking equals to target then use atMostTarget(target, arr) -  atMostTarget(target-1, arr
-

Important problems :- 
[Find X-Sum of All K-Long Subarrays II](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/)