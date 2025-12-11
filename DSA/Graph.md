#### Traversal technique
	1. BFS (Breath first Search)
	2. DFS (Depth first Search)
	
	Concepts :- Bipartite graph, Topological sort, cycle detection 
##### Tarjan's Algorithm (IMP):- 
	Assign the time & lowest time to reach each node using dfs. If some node has greater time than parent that means it can't be reached node before parent. So there will only one edge connecting them.
	Problems :- Articulations Points, Bridges in Graph, Strongly connect component 

##### Kosaraju's Algorithm(IMP) :-
	Used to find strongly connected components 
	step of algorithm :-
		i. Find the toposort of the graph
		ii. Reverse the edge of graph 
		iii. Apply dfs on the graph

#### Minimum Spanning Tree (MST)
	1. PRIMS ALGORITHM :- 
		Using priority queue take the edge with minimum weight and but the tree
	2. KRUSKAL'S ALGORIGHT using Disjoint Set :-
	     sort the edges accroding to the minimum weight and merge the component only when they're not part of same components.

#### Distance Algorithm 

DAG shortest path
	- Khan's Algorithm (toposort)
	- apply dfs

Dijistra's algorithm :- 
	- Shortest path finding algorithm uses heap or set
	- It doesn't work on -ve edges and weighted edged 
	
Bellman Ford 
	- Shortest path finding algorithm that works with -ve edge also
	- Iterate over every edge n-1 time and update the edges
	- Why only n-1 ?
		- Since in a graph of N nodes, in worst case, you will take N-1 edges to reach from the first to last, thereby we iterate for N-1 iterations.
		- Try drawing a graph which takes more than N-1 edges for any path, it is not possible
	
Floyd Warshall
	 - Used to find the distance b/w every node to every other node



Important problems :- 
[Message Route](https://cses.fi/problemset/task/1667)
[Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
[Bridge edge in a graph](https://www.geeksforgeeks.org/problems/bridge-edge-in-graph/1)
[Articulation Point](https://www.geeksforgeeks.org/problems/articulation-point2616/1)
[Minimum cost to connect all houses in a city](https://www.geeksforgeeks.org/problems/minimum-cost-to-connect-all-houses-in-a-city/1)
[Mother Vertex](https://www.geeksforgeeks.org/problems/mother-vertex/1)
[Reorder Routes to Make All Paths Lead to the City Zero](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)
[Shortest Path Using Atmost One Curved Edge](https://www.geeksforgeeks.org/problems/shortest-path-using-atmost-one-curved-edge--170647/1)
[Second Best Minimum Spanning Tree](https://www.geeksforgeeks.org/problems/second-best-minimum-spanning-tree/1)
