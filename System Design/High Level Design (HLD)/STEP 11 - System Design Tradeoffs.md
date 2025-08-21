
1. **Push vs Pull architecture**
	![](Images/Push%20vs%20Pull%20Architecture.png)
2. **Consistency vs Availability** 
	![](Images/Consistency%20vs%20Availability.png)
3. **SQL vs NoSQL DBs**
	![](Images/SQL%20vs%20NoSQL.png)
4. **Memory vs Latency**
	## **The Core Trade-off**
	- **Memory** (RAM usage) and **Latency** (response time) often pull in opposite directions.
    - If you want **lower latency**, you often need to **use more memory** (e.g., by caching or precomputing).
    - If you want **lower memory usage**, you often accept **higher latency** (e.g., by computing or loading data on demand instead of storing it).
    
	![](Images/Memory%20vs%20Latency.png)
5. **Throughput vs Latency** 
	- **Latency** → _How long it takes for a single request to be processed from start to finish_ (time per request). Unit: milliseconds (ms), seconds.
    - **Throughput** → _How many requests a system can process per unit of time_.
    
    You can’t always optimize both at the same time.
    - If you **optimize for low latency**, you may have idle capacity between requests, lowering throughput.
    - If you **optimize for high throughput**, you may batch or queue requests, which increases latency for each request.
    
	![](Images/Throughput%20vs%20Latency.png)
6. Accuracy vs Latency
	## **The Trade-off**
	The more accurate a system tries to be, the more data it needs to process and the more computation it needs — which often **increases latency**. 
	If you want results faster, you may need to skip some processing, which **reduces accuracy**.
	
	![](Images/Accuracy%20vs%20Latency.png)