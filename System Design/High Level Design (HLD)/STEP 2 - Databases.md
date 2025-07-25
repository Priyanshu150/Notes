
1. SQL V/S NO-SQL 
	![alt text](sql_or_noSql.png)
	
	![alt text](summary_of_nosql.png)

2. In-memory DBs
	An **In-Memory Database (IMDB)** stores data **entirely in RAM** rather than on disk.
	“Faster data access by keeping everything in memory (RAM), not on disk.”
	
	![alt text](key_char_of_IMDB.png)
	![alt text](ex_of_IMDB.png)
	![](../Images/IMDB_redis_vs_memcached.png)

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