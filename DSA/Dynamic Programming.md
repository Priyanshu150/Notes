Concept for solving dynamic programming problem :- 
1. Express everything in terms of parameters
2. Try out all possibilities 
3. Find out the result (min, max, count, etc...)
4. Write the base case accordingly

Concept for solving partition problems :-
1. Start with entire block/array express always in terms of i & j
2. Try out all possible ways (probably run a loop)
3. Return the best possible 2 partitions
#### Concept 
	The concept is to not recalcualte the state which already previously occured. Instead save it in some data structure and use it later.
	
There are 3 ways to achieve DP :- 
1. **Memoization** :-  Use a data structure to store the value for all recursion call and use it later when needed if that value is repeated under recursion tree.

2. **Tabulation** :-  Write down all state in terms of loops. And store value in data structure in order to avoid recursion. 
	ex - if going (1 - n) in memoization use (n - 1) in tabulation and vice-versa

3. **Space optimization** :- Use further optimization to reduce space if possible. It's not possible in every case.

Important Questions :- 
[Maximum sum of elements not part of LIS](https://www.geeksforgeeks.org/problems/maximum-sum-of-elements-not-part-of-lis/1)
[Maximum Total Damage With Spell Casting](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/)
[Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence/)
[K Inverse Pairs Array](https://leetcode.com/problems/k-inverse-pairs-array/)
[Maximum Difference Score in a Grid](https://leetcode.com/problems/maximum-difference-score-in-a-grid/)
 [Number of Paths with Max Score](https://leetcode.com/problems/number-of-paths-with-max-score/)
 [Minimum Falling Path Sum II](https://leetcode.com/problems/minimum-falling-path-sum-ii/)
 [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)
 [Rod Cutting](https://www.geeksforgeeks.org/problems/rod-cutting0840/1)
 [Print all LCS sequences](https://www.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1)
 [Number of People Aware of a Secret](https://leetcode.com/problems/number-of-people-aware-of-a-secret/)
 [Maximum Subarray Sum with One Deletion](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/)
 [Length of Longest Fibonacci Subsequence](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/)
 [Number of paths in a matrix with k coins](https://www.geeksforgeeks.org/problems/number-of-paths-in-a-matrix-with-k-coins2728/1)

Partition/Block DP :- 
[Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)
[Minimum Score Triangulation of Polygon](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/)

Strings DP :-
[Wildcard Pattern Matching](https://www.geeksforgeeks.org/problems/wildcard-pattern-matching/1)
[Interleaved Strings](https://www.geeksforgeeks.org/problems/interleaved-strings/1)
[Number of distinct subsequences](https://www.geeksforgeeks.org/problems/number-of-distinct-subsequences0909/1)