---
layout: post
title: "Algorithms Review Cheat Sheet"
---
## Basic Concepts
### Complexity
An algorithm is efficient if it runs in polynomial time or better.
#### Big-O
Denotes worst case running time, a bound on the largest possible run time given
input of size N.
Theta is lower and upper bound
> 1 < log n < n < n log n < n^2 < n^3 < a^n < n!
#### Amortized
Average running time per operation over a worst-case sequence of operation
* Ex. Size-doubling array: 2^n operation every 2^ith step, but constant step
otherwise. Hence, O(n) with constant amortized time
### Stable Matching
Given a set of preferences among hospitals and medical school students, design
a self-reinforcing admissions process
* Unstable paier: x and y are unstable if
	* x prefers y and y prefers x to their assigned groupign
* Stable Assignment: Assignment with no unstable pairs
* Perfect matching: Everyone has a single unique match
#### Propose-and-reject algorithm
* Gale-Shapely
* Guarantees a stable matching for any problem
* Gives a proposing-optimal assignment
```
while some man is free and hasn't proposed to every woman
	choose such a man m
	w = first woman on m's list he has not proposed to
	if w is free
		assign m and w together
	else if w prefers m to her fiance m'
		assign m and w to be engaged, m' is free
	else
		w rejects m
```
### Data Structures
#### Linked List
* Each data node is linked to the next
* Access: O(n)
* Insert: O(1)
* head - first node in list
* tail - last node in list
#### Stack
* Last in, First out
* Access: O(1)
* Insert: O(1)
* push(), pop()
* Implement with linked list
#### Queue
* First in, First out
* Access: O(1)
* Insert: O(1) if doubly linked list
#### Searching
* A **linear search** can be performed on a sorted sequence O(n)
* **Binary Search**: Divide-and-conquer on sorted sequence O(log n)
#### Sorting
* **Bubble Sort**: Arranges items by iterating over the sequence, putting larger
values on the top piece by piece, swap if left > right adjacent. O(n^2)
* **Selection Sort**: Repeatedly select the next smallest item from unsorted 
items O(n^2)
* **Insertion Sort**: Iterates over sorted sequence, inserts the next
unsorted item into its proper place O(n^2)
* **Heap Sort**: Build heap and extract keys in sorted sequence O(n log n)
#### Heap Trees
A heap is a complete binary tree in which the nodes are organied based on their
data values
* Max heap: The value is greater than its two children
* Min heap: The value is smaller than its two children
* Can only remove from the root node
* Inserts in next available left/top location, and sift upwards
* can be stored in a dynamic array
	* parent = i // 2
	* left = 2 * i
	* right = 2 * i + 1
* Insertion: O(log n)
* Extraction: O(log n)
* Building
	* Top down: Heaps constructed by inserting into an empty heap O(n log n)
	* Bottom up: Put everything in array and then fix O(n)
#### BST
Tree such that all keys less than current key is in the left subtree and all
keys greater than the key are stored in the right subtree
* Searching is trivial
* Can be built recursively or iteratively
* Removing
	* Remove interior node ->
	* Successor: Minimum key in right subtree
* Search, insert, delete: O(n)
##### AVL Trees
Developed by Adel'son-Velskhii and Landis to guarantee that the tree is height
balanced
### Master Theorem

## Algorithm Subcategories 
### Divide and Conquer
* Break up problem into several parts
* solve each part recursively
* combine solutions to sub-problems into overall solution
* n^2 -> n log n
#### Mergesort
* Divide array into two halves
* recursively sort each half
* merge two halves to make a sorted whole
#### Convex Hull
Given a set of points, find the smallest convex polygon containing all the 
points

Graham-scan
```
start at bottom-left point
sort points by relative polar angle
begin
	add point to stack
	pop off if it creates a left turn

```
#### Counting Inversion
Find number of inversions made to match two lists
```
if list L has one element
	return 0 and list L
Divide L into two halves A and B
(ra, A) = function(A)
(rb, B) = function(B)
(r, L)  = merge-and-count(A,B)
return r = ra + rb + r and sorted list L
```
### Greedy Algorithms
* Build up solutions in small steps
* Make local decisions
* Previous decisions do not factor into the next consideration
#### Coin changing
Given currency denominations, devise a method to pay amount to customer using
fewest number of coins
* At each iteration, add coin of largest value that does not take us past the 
amount to be paid
	* Optimal for US coinage
	* Suboptimal for other situations (1, 10, 21, 34, 70, 100):(140)
#### Interval Scheduling
Find the maximal subset of mutually compatible jobs
* Consider ordering
	* Earliest Start time
	* Earliest finish time
	* Shortest interval
	* fewest conflicts
	* **Typically Finish Time is Optimal**
* Unweighted solution: Take the next valid job based on finish time and no
conflicts
* O(n log(n))
#### Interval Partitioning
Find minimum number of classrooms to schedule all lectures so that no two occur
at the same time
* number of classrooms needed >= depth
* Sort by start time
* Assign lecture to any compatible classroom
* O(n log(n))

### Dynamic Programming
Develop a solution as a solution to several subproblems, and get benefits in 
performance as a result of the division of computation.
#### Weighted Interval Scheduling
```
```
#### Knapsack
Given:
* A collection of n items
* Each item has a weight w
* each item has a value c
* The knapsack has a total weight W

Task:
* Determine set S of items of max value that can be contained in knapsack

Divisible:
* Items do not have to be included in entirety
```
sort items in decresing order of c/w
i = 1
currentW = 0
while currentW + w_i < W
	take item of weight w_i and cost c_i
	currentW += w_i
	i++
take W-currentW portion of item i
```
Indivisible:
```
function(n,c,w,W)
if n <= 0
	return 0
if W < w_n
	withLastItem = -1
else
	withLastItem = c_n + function(n-1,c,w,W-w_n)
withoutLastItem = function(n-1,c,w,W)
return max{withLast,withoutLast}
```
* Create knapsack with subproblems
* let S[k][v] := the solution with first k items and available weight v
```
init S[0][v] = 0
init S[k][0] = 0
for v from 1 to W
	for k from 1 to n
		S[k][v] = S[k-1][v]
		if w_k <= v and S[k-1][v-w_k] + c_k > S[k][v]
			S[k][v] = S[k-1][v-w_k] + c_k
return S[n][W]
```
#### Longest Increasing Subsequence
### Graph Algorithms
A graph is usually defined as having a number of vertices V and a number of
edges E with or without weights.
#### Prim's Algorithm
* Finds Min-Span Tree
* Greedy
* O(V^2)
```
1. Choose an arbitrary starting vertex
2. Of edges that connect to the tree, add the minimum-weight one
3. Repeat until all vertices are accounted for
```
#### Dijkstra's Algorithm
* Shortest path between nodes with non-negative edges
* O(V^2)
```
1. Choose starting vertex
2. Assign each node dist: 0 for starting, inf otherwise
3. For current, consider all neighbors and calc tentative dists.
		Compare with previous value and assign smaller
4. Mark the current node as visited and remove from unvisited set
5. if destination has been reached, terminate
	   else take 'shortest' unvisited node path, set as new current, and 3)
```
#### Floyd Warshall
* Compares all possible paths through the graph between each pair of vertices
* O(V^3)
```
let dist be a |V| x |V| array of minimum dists at infinity
for each vertex v
	dist[v][v] = 0
for each edge (u,v)
	dist[u][v] = w(u,v) // the weight of the edge (u,v)
for k from 1 to |V|
	for i from 1 to |V|
		for j from 1 to |V|
			if dist[i]][j] > dist[i][k] + dist[k][j]
				dist[i][j] = dist[i][k] + dist[k][j]
			end if
```
#### Bellman-Ford
* Computes shortest path from source vertex to all other vertices
* Slower than Dijkstras
* but can handle negative values
* Runs in O(|V||E|)

```
for each vertex v in vertices:
	dist[v]    = inf
	predecessor[v] = null;
dist[source] = 0

for i from 1 to size(vertices)-1:
	for each edge (u,v) with weight w in edges:
		if dist[u] + w < dist[v]:
			dist[v] = dist[u] + w
			predecessor[v] = u

for each edge (u,v) with weight w in edges:
	if dist[u] + w < dist[v]:
		error "Graph contains a negative-weight cycle"
return dist,predecessor
```
#### Kruskal

#### Ford-Fulkerson
* Greedy Algorithm
* Computes maximum flow in a flow network
* Complexity: O(Ef); E edges, f maximum flow

```
given G = (V,E) with flow capacity c, source s, and sink t
f(u,v) = 0 for all edges(u,v)
while there is a path from s to t in G_f, with c_f(u,v) > 0 for all edges:
	find c_f(p) = min(c_f(u,v):(u,v))
	for each edge (u,v)
		f(u,v) += c_f(p)
		f(v,u) -= c_f(p)

```
