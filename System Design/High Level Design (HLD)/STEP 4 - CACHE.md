
1. What is cache ? (Redis, Memcached)
	A **cache** is a high-speed, temporary storage layer that holds **frequently accessed data** to reduce latency and load on backend systems.
	![](../Images/why_cache.png)
	Can you identify **what to cache**?
		=> Product listings, search results, homepage data, session tokens.
    
	Can you explain **where** to place the cache?
		=> We typically place the cache **between the application layer and the database**.  This way, every read or write can check the cache first before going to the slower, persistent DB.  It acts as the **first layer of defense** to reduce DB load and improve response time.
	
	 Do you know about **invalidation** and **staleness**?
		=> Use TTLs, versioning, write-through strategy, or explicit invalidation.

2. Write Policies : write back, through and around
	![](../Images/common_cache_strategies.png)
	In a **Write-Around** strategy:
	- Write operations go directly to the database (bypassing the cache).
	- The cache is only updated when the data is read again (lazy population).
	![](../Images/comparision_with_write_cache_strategies.png)


3. Replacement Policies : LFU, RFU, Segmented LRU etc.
	When the cache reaches its **memory limit**, older or less important data must be **evicted (removed)** to make room for new data.
	
	Eviction policies determine **which entries to remove**.
		i) **LRU (Least recently used)** - Removes the item that **hasn’t been accessed in the longest time**.
		ii) LFU (Least Frequently used) - Removes the item that has been **accessed the fewest number of times**.
		iii) **FIFIO (first in first out)** - Removes the **oldest inserted item**, regardless of usage
		iv) **TTL (time to live)** - Automatically expires an item **after a fixed time** since insertion or last access.
		v) Random Replacement (RR) - Randomly removes any item from the cache.
		
	![](../Images/eviction_policies_of_cache.png)
	
	
	What is **Segmented LRU (SLRU)** ? 
	 **Segmented LRU** divides the cache into **two (or more) segments**, typically:
	- **Probationary Segment**: for _newly inserted or single-accessed_ items
    - **Protected Segment**: for _frequently reused_ items
    
    ![](../Images/how_slru_works.png)
	![](../Images/slru_use_cases.png)


4. Content Delivery Networks (CDNs)
	A **CDN (Content Delivery Network)** is a **geographically distributed network of servers** that cache and deliver **static content** (like images, videos, CSS, JS, HTML) **closer to users** to improve speed and reduce latency.
	
	What does CDN cache ?
	=> Images, Videos, Static Assets and API Response 
	
	Popular CDN providers 
	=> Cloudflare, Akamai, AWS CloudFront, Fastly, Google Cloud CDN, Azure CDN
	
	![](../Images/How_does_cdn_works.png)
	 ![](../Images/benefits_of_cdn.png)![](../Images/Limitations_of_cdn.png)
	 ![](../Images/When_to_use_CDN.png)