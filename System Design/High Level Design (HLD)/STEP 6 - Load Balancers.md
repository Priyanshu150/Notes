
A **load balancer** is a system that distributes incoming network traffic across **multiple servers** to ensure no single server becomes a bottleneck. It improves **performance**, **reliability**, and **availability** of applications.

1. **Load Balancing Algorithms (Stateless & Stateful)**
	![](../Images/Load%20Balancing%20Algorithms.png)
	![](../Images/Types%20of%20Load%20Balancers.png)
	![](../Images/Stateless%20vs%20Stateful.png)
	
	## 💡How It Affects Load Balancing?
	🟩 Stateless Applications
	- Easier to load balance: any server can handle any request.
	- ✅ Supports **Round Robin, Least Connections, etc.**
	- No need to care which server gets the request.
	- Example: Static HTML content, REST APIs, file uploads.
	
	🟥 Stateful Applications
	- User’s session data is tied to a specific server.
	- You need **Sticky Sessions** or **externalize the session state**.
    Example:
    - Login session stored in server memory → user must hit same server.
    - Shopping cart app → user cart stored in backend memory.
	
	
	### 🧠 Two Strategies for Handling Stateful Apps:
		Sticky Sessions / Session Affinity
		- Load balancer ensures user always hits the same server.
		- 💥 Drawback: If the server goes down, session is lost.
		
		Make Stateless via External Store
		- Store session in Redis, DB, or JWT.
        - Now any server can serve any request.
        - ➕ More resilient and scalable.
    
2. **Consistent Hashing** 
	**Consistent Hashing** is a technique to **distribute data across a dynamic set of nodes** (servers, caches, databases) in such a way that **minimum data is moved** when nodes are added or removed.
	
	Consistent Hashing is a way to distribute keys across servers such that when servers are added or removed, **only a small subset of keys need to be re-mapped**.  
	Unlike naive modulo hashing, which causes a large amount of data movement, consistent hashing organizes nodes and keys on a hash ring, and assigns keys to the next node in a clockwise direction.  
	It’s widely used in systems like distributed caches, databases, and load balancers'
	
	### 🔄 How It Works (Step-by-Step):
	**Hash Ring**:
	- Imagine a circle (ring) of hash values from `0` to `2³² - 1`.
	- Place all servers on this ring using a hash function.
		- Example: `hash("S1") = 12345678` → put `S1` at that point on ring.
		- Similarly for `S2`, `S3`.
		
    **Storing data**:
    - Hash your keys (like `user123`) to the same ring.
    - The data goes to the **next closest server in a clockwise direction**.
	
	 **When adding/removing a server**:
	 - Only keys that map to that specific region of the ring are re-distributed.
	 - ⚠️ Drastically **less movement of keys** than the modulo strategy.
	
	## 💡 Optimization: Virtual Nodes (vNodes)
		To improve load balancing:
		- Each server is represented **multiple times** on the ring (e.g., `S1-1`, `S1-2`, `S1-3`)
		- Helps even out hot spots and uneven key distributions.
	
	![](../Images/use-case%20of%20consistent%20hashing.png)
	
3. **Proxy and Reverse Proxy**
	## 🧑‍💻 Forward Proxy (a.k.a. "Proxy")
		Think: “I don’t want the server to know who I am.”
		✅ Purpose:
		- Anonymity (mask client's IP)
		- Caching requests for better speed
		- Filtering/blocking outbound traffic (e.g., in offices)
		- Logging and monitoring
	    
	    🔁 Example:
	    - You're in a restricted office network.
	    - You use a proxy server to visit example.com
	    - The request goes:  You → Proxy → example.com → Proxy → You
	
	## 🧑‍🔧 Reverse Proxy
		Think: “I don’t want the client to directly hit my server.”
		✅ Purpose:
		- Load balancing
		- SSL termination
		- Caching
		- Security (hiding backend services)
		
		🔁 Example:
		- You access shop.example.com.
		- A reverse proxy like Nginx or HAProxy handles the request
		- It routes to one of many internal servers: 
			You → Reverse Proxy → Backend Server
	
	![](../Images/Proxy%20and%20Reverse%20Proxy.png)

4. **Rate Limiting**
	**Rate limiting** is a technique used to **control the number of requests a user or system can make to a service** over a given period of time.
	 🎯 Its main goals:  
		 🔒 Prevent abuse,  
		 🌐 Ensure fair usage,  
		 ⚖️ Protect backend systems from overload.
	
	## 📦 Common Use Cases
	- **APIs** (REST/GraphQL): Limit 100 requests per minute per IP
	- **Login endpoints**: Max 5 attempts per minute
	- **Messaging apps**: Only 10 messages/min per user
    - **Payment systems**: Only 3 transactions/second per card
    
	![](../Images/Why%20Use%20Rate%20Limiting.png)
	![](../Images/Rate%20limiting%20Strategies.png)
	![](../Images/Examples%20of%20Rate%20limiting.png)
	[Client] → [API Gateway / Load Balancer]
                     ↓
           [Rate Limiter Logic]
              (Redis, Token Bucket, etc)
                     ↓
               [Application Server]
