
1. SQL V/S NO-SQL 
	![alt text](sql_or_noSql.png)
	
	![alt text](summary_of_nosql.png)

2. In-memory DBs
	An **In-Memory Database (IMDB)** stores data **entirely in RAM** rather than on disk.
	“Faster data access by keeping everything in memory (RAM), not on disk.”
	
	![alt text](key_char_of_IMDB.png)
	![alt text](ex_of_IMDB.png)
	![](../Images/IMDB_redis_vs_memcached.png)
	
	How to use In-Memory DBs in System Design ??
	1. **As a Cache Layer (most common)**
	- Keep frequently accessed data in Redis/Memcached.
	- Example: Store **user session tokens, product catalog, leaderboard scores**.
	- DB → Cache → Application.
	
	2. **As a Primary Database**
	- Use when you want **speed + low latency** and can tolerate **memory cost**.
	- Example:
		- **Real-time bidding system** (ads bidding in <50ms).
        - **Stock trading platforms** where order book must update instantly.
		
	3.  **For Pub-Sub / Queues**
	- Redis supports **publish-subscribe** model.
	- Example: Send real-time notifications or chat messages.
	
	4. **For Pub-Sub / Queues**
	- Redis supports **publish-subscribe** model.
	- Example: Send real-time notifications or chat messages.
	
	# **When to Use / Not Use**
	✅ **Use when**:
	- System is **read-heavy** and latency-sensitive (e.g., recommendation engine).
	- Data changes frequently and needs fast sync (e.g., gaming leaderboard).
	- You need **real-time processing** (e.g., fraud detection).
	
	❌ **Avoid when**:
	- Data is huge (won’t fit in memory → very costly).
	- Long-term storage (better to use disk DB + IMDB as cache).
	- Strong durability is required but RAM costs are too high
	
	# 🧩 **Persistence in In-Memory DBs**
	- One doubt: “If it’s in-memory, won’t I lose data when server restarts?”  
    👉 Yes, unless you configure **persistence**.
    - **Redis** offers:
	    - **RDB snapshots** (periodic save to disk).
		- **AOF (Append Only File)** (every write logged).
        - Hybrid approach.
    - So, in-memory DBs can act as **durable stores** too.
	
	# 📝 Interview Tip (How to Answer)
	In-memory DBs like Redis or Memcached store data in RAM instead of disk, so they give sub-millisecond responses. They’re typically used for caching, real-time analytics, pub-sub messaging, and session stores. For durability, some IMDBs provide persistence options like snapshots or write-ahead logs. I’d use them in scenarios where low latency is more important than absolute durability, such as leaderboards, session management, or real-time bidding.


3. Data Replication & Migration 
	#REPLICATIONS :- **Replication** is the process of **copying and maintaining** the same data across **multiple servers or databases**.
	
		🧠 Why It Matters:
			- High availability
			- Fault tolerance
			- Faster local access (geo-distributed replicas)
			- Load distribution
	
	![alt text](type_of_replication.png)
	#MIGRATIONS :-  **Migration** is the process of **moving data** from one system/storage/database/version to another.
	
		🧠 Why It Matters:
		- Database upgrade
		- Schema changes
		- Moving from monolith to microservices
		- Cloud migrations (e.g., on-prem → AWS)
		- Architectural change
	
	![alt text](type_of_migration.png)

4. Data Partitioning 
	**Partitioning** is the process of **dividing a large dataset** into smaller, **independent chunks (partitions)** so they can be distributed across **multiple machines or databases**.
	![alt text](why_partition.png)
	
	**Types of Data Partitioning** :- 
		1) Horizontal Partitioning (Sharding)
			- Split data **row-wise**.
			- Example: User IDs 1-1M → DB1, 1M–2M → DB2
		2) Vertical Partitioning
			- Split data **column-wise** across databases.
			- Example: Basic profile info in one DB, payment info in another.
		3) Functional Partitioning
			- Split by **business domain** (microservices pattern).
			- Example: Orders DB, Users DB, Products DB.
5. Sharding
	
	![alt text](sharding_strategies.png)