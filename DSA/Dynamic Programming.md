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