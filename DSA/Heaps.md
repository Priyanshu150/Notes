##### A data structure is heap that satisfies two conditions 
1. It's a complete binary tree 
2. It follow heap property. There are 2 type of heap property
	1. **Min Heap** :- value of its children is greater than or equal to its own value
	2. **Max Heap** :- value of its children is lesser than or equal to its own value

##### Implementation / Representation of heap
 - **vector** is used to represent a heap
 - If node is at #i index, then its left child will be at #2i index, then it right child will be at #2i+1 index and it's parent will be at #i/2 index. (1 -based-indexing)
 - If node is at #i index, then its left child will be at #2i+1 index, then it right child will be at #2i+2 index and it's parent will be at #i/2 index. (0-based-indexing)
 - **priority_queue** is used in STL for heaps.

#### Major algorithm of heaps 

1. Insertion 
	1. insert the node at the end of the array. 
	2. And check parent node value if needed swap it.
	
2. Deletion 
	1. Swap first and last element 
	2. Decrease the size and remove the last element 
	3. Apply the Heapify operation
	
3. Heapify 
	1. For current node check it left and right child which has largest value (max heap)
	2. If current node has the largest value then i.e. already a heap
	3. Other swap the current node with largest valued child 
	4. Call the recursion to check for that child whether that child is forming a heap
	
4. Build Heap
	1. All the nodes which are at the leaf are already a heap
	2. Traverse from right to left apart from leaf node 
	3. Apply heapify operation for them 
	
5. Heap Sort

