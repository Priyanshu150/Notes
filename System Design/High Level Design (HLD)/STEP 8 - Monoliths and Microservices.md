1. **What is a Monolith?**
 => A **monolithic app** is a single codebase where all features and modules are tightly coupled and deployed as one unit
 ![](../Images/Issues%20in%20Large%20Monoliths.png)
2. **Why microservices ?**
	**Microservices** is an architectural style that structures an application as a **collection of small, independent, loosely coupled services** that communicate over APIs.
	
	Each microservice is:
	- Independently deployable
	- Responsible for a single business capability
	- Scalable and fault-tolerant on its own
	![](../Images/Why%20microservices.png)
	![](../Images/Trade-offs%20for%20microservices.png)
	
	## 🧪 When NOT to Use Microservices
	For small teams or MVPs, a monolith might be better due to its simplicity.
	Avoid microservices if:
	- Your team is small (hard to manage infrastructure)
	- You don’t yet need independent scaling
	- Application is simple or has no scaling bottlenecks
	
	## 🎯 Interview Summary Statement
	Microservices architecture allows systems to scale, evolve, and deploy independently. It promotes team autonomy and resilience, especially in large systems. However, it introduces distributed system complexity, so it's best suited for organizations prepared to handle operational challenges like service discovery, observability, and eventual consistency.

3. Concept of 'Single Point of Failure '
	A **Single Point of Failure (SPOF)** is **any individual component** in a system — hardware, software, or process — that, if it fails, causes the **entire system to stop working**.
	
	![](../Images/Real%20world%20ex%20of%20SPOFs.png)
	![](../Images/Eliminate%20SPOFs.png)
	## Interview-Ready Answer
	A single point of failure is any component that, if it fails, will cause the entire system to go down. 
	 In production-grade systems, we eliminate SPOFs using redundancy, replication, and failover strategies.  
	For example, instead of having one database server, we use master-slave replication with automated failover to ensure high availability.
	
	Bad Architecture (SPOF):
	[Client] → [Load Balancer] → [App Server] → [DB]
	If App Server OR DB fails → ❌ Entire system breaks
	High-Availability Fix:
	[Client] → [LB1, LB2] → [App1, App2, App3] → [DB1 (Primary), DB2 (Replica)]

4. Avoiding Cascading failures 
	=> A **cascading failure** happens when the failure of **one component** triggers a **chain reaction** of failures across other services or layers of the system.
	![](../Images/Cause%20of%20Cascading%20failures.png)
	![](../Images/Strategies%20to%20prevent%20cascading%20failures.png)
	
	### 💡 Interview Summary
	“Cascading failures occur when one component fails and its load spills over to others, bringing down the system.  
	To prevent this, I use patterns like timeouts, circuit breakers, bulkheads, and load shedding to isolate faults and degrade gracefully. This ensures the system stays resilient even under stress.”

5. Containerizations (docker)
	### 🔍 What is Containerization?
	**Containerization** is the process of **packaging software** along with its dependencies, configuration, and runtime into a **single portable unit** called a **container**.
	This ensures that the application **runs consistently** across different environments — from a developer’s laptop to staging, to production.
	Think of it like: A container is a lightweight suitcase with your app + everything it needs to run.
	![](../Images/Containerization%20uses.png)
	### 🐳 What Is Docker?
	**Docker** is the most popular containerization platform.
	It allows you to:
	- Package apps into containers
	- Run and manage containers
	- Pull prebuilt images from Docker Hub
	![](../Images/Docker%20Terminology.png)
	
	### 💬 Real-World Example
	Let’s say you have a **Node.js app** that needs:
	- Node 18
	- MongoDB
	- Some environment variables
	With Docker:
	- You write a Dockerfile with Node base image
	- Add your app code
	- Install Mongo via a second service (using Docker Compose)
	- Anyone can now run your full app with a single command → `docker-compose up`
	
	![](../Images/VM%20vs%20Docker.png)
	
	### 📈 How It Helps in Interviews
	Containerization helps achieve consistency, portability, and faster deployments. Using Docker, I can ensure my service behaves the same from dev to production. I package each microservice into a container, use Compose for local orchestration, and deploy them using Kubernetes for scaling.

6. Migration to microservices 
	**Migrating to microservices** means moving from a **monolithic** architecture (one large codebase) to an **independent, loosely-coupled set of services** — where each service focuses on a single business capability and can be developed, deployed, and scaled independently.
	
	![](../Images/Why%20Migrate.png)
	![](../Images/Challenges%20of%20Migration.png)
	
	### 🛣️ Migration Strategy — Step-by-Step
	1) **Assess & Plan**
	- Identify pain points in the monolith (e.g., scaling, slow deployments)
	- Define business goals (faster release, better scalability)
    
	 2) **Start with Domain Decomposition**
	 - Use **Domain-Driven Design (DDD)** to break the monolith into **bounded contexts**
	 - Common decompositions:
		Auth
		Payments
		Notifications
		Product Catalog
        
	3) **Strangle the Monolith (Strangler Fig Pattern)**
	- Gradually replace parts of the monolith with microservices.
	- Route specific requests to the new service while keeping rest on the monolith.
    
    4) **Create Service Contracts (APIs)**
    - Define REST/gRPC APIs for new services.
    - Ensure clear boundaries between services.
	
	5) **Split the Database**
	- Either:
	     Use **shared DB** at first (not recommended long-term)
		 Or **migrate service-by-service** to its own DB (preferred)
        
	6) **Handle Cross-Cutting Concerns**
	- Logging
	- Monitoring
	- Authentication
	- Service discovery
	- Load balancing
	- Rate limiting
	
	7) **Test Extensively**
	- Unit + integration tests
	- Contract testing between services
    
	 8) **Deploy Gradually**
	 - Use canary deployments or blue-green deployments.
	 - Observe service health using metrics & alerts.
	
	### ✅ In Interviews, You Can Say:
	“We used the **Strangler Pattern** to slowly migrate our monolith.  
	We started by extracting the `user-auth` logic into a microservice and exposed it via REST.  
	Eventually, each domain was moved into its own service with its own database.  
	We introduced Kafka to manage async events and ensured observability using Prometheus and Grafana.”
