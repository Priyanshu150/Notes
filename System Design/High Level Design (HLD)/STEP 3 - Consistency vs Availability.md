
1. Data consistency and it's level
	**Data consistency** means that all users (or nodes) see the **same data** at the same time, regardless of where or how they access it.
	
	**Types / Levels of Consistency** 
	![alt text](levels_of_consistency.png)
		
2. Isolation and it's level
	**Isolation** ensures that **concurrent transactions** do not interfere with each other and lead to **inconsistent results**.
	
	**Types / Levels of Consistency**
	![alt text](levels_of_isolations.png)
	
3. CAP Theorem
	 P stand for **Partition Tolerance** means the system continues to function **even if network communication between nodes is broken or delayed.**
	![alt text](cap_theorem_img.png)
	
	example :- https://www.youtube.com/watch?v=8UryASGBiR4
	
4. ACID and BASE
	
	### **ACID** (Classic RDBMS guarantee)
	- **Atomicity** → All operations in a transaction succeed, or none do.
	- **Consistency** → Data remains valid according to all rules (constraints, relationships).
	- **Isolation** → Concurrent transactions don’t interfere with each other.
	- **Durability** → Once committed, data won’t be lost (even after crashes).
	💡 **Used in:** Traditional SQL databases like PostgreSQL, MySQL, Oracle.
	
	### **BASE** (Modern distributed system compromise)
	- **Basically Available** → The system guarantees availability (response even if partial).
	- **Soft State** → Data may be temporarily inconsistent between nodes.
	- **Eventual Consistency** → Data will become consistent _eventually_, given enough time.
    💡 **Used in:** NoSQL and large distributed databases like Cassandra, DynamoDB, Couchbase.
	
5. Leader Election (Raft, Paxos)
	# **What is Leader Election?**
	In a **distributed system** (multiple servers/nodes working together), sometimes you need **one node to act as the "leader"**:
	- Coordinates writes.
	- Makes final decisions.
	- Prevents conflicts (e.g., two nodes writing at the same time).
    Leader election = **process of agreeing which node is the leader** among all participants, even if failures happen.
	
	Two major algorithms:
	1. **Paxos (older, theoretical, harder to implement)**
		- Designed by Leslie Lamport (famous paper “The Part-Time Parliament”).
		- Works in phases:
			**Proposer** suggests a value (like a leader).
			**Acceptors** vote.
			If majority agrees → value chosen.
		- Guarantees **safety** (no wrong decision), but harder to implement.
		- Used in **Google Chubby Lock Service**.
	
	2. **Raft (modern, easier to understand & implement)**
		- Designed in 2014 as a more **understandable alternative to Paxos**.
		- Works in three roles:
			- **Leader**: handles client requests, replicates log entries to followers.
			- **Followers**: passive, just replicate.
			- **Candidates**: when no leader is alive, they request votes.
		- Leader election in Raft:
			1. A follower times out (no heartbeat from leader).
			2. Becomes **Candidate**, asks others for votes.
			3. If majority grants votes → becomes **Leader**.
			4. Leader sends periodic **heartbeats** to maintain authority.
        **Advantage:** Much easier to implement, widely used in systems like **etcd, Consul, Kubernetes control plane**.
	
	# 📝 **Interview-Ready Answer**
	Leader election is a distributed systems technique to ensure only one node coordinates work, avoiding conflicts. Algorithms like Paxos and Raft are used. Paxos is theoretically complex but guarantees safety, while Raft is easier to understand and widely used in systems like etcd and Kubernetes. Leader election solves problems like split-brain and inconsistent writes in distributed databases or clusters.
	
6. Important Terminologies 
	
	**What is a Race Condition?**
	=> A **race condition** happens when **two or more processes/threads try to access or modify the same shared resource at the same time**, and the final result **depends on the order in which they run**.
	
	📍 **Where Race Conditions Occur**
	- **Multi-threaded programs** (shared variables without locks).
	- **Databases** (two transactions updating same row).
	- **Distributed systems** (two nodes think they’re leader).
	- **Web apps** (double-clicking "Pay Now" creates duplicate payment).
	
	🛠 **How to Prevent Race Conditions**
	1. **Locks / Mutexes** → allow only one thread at a time.
	2. **Atomic operations** → ensure read-modify-write happens as a single step.
	3. **Transactions in Databases (ACID)** → rollback if conflict.
	4. **Leader election** in distributed systems → only one node makes updates.
	5. **Idempotency keys** in APIs → prevent duplicate actions.
	
	![](../Images/Dirty%20Reads%20vs%20Non-Repeatable%20Reads%20vs%20Phantom%20Reads.png)