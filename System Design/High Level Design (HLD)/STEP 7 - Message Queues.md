
1. **Asynchronous Processing (Kafka, RabbitMQ)**
	 ✅ What is Asynchronous Processing?
	 Asynchronous processing means that a **task is initiated** but **not immediately completed** — instead of waiting, the system continues with other work.
	
	![](../Images/Sync%20vs%20Async.png)
	
	## 🎯 When to Use Asynchronous Processing?
	- High throughput systems (millions of events/sec)
	- Tasks that can be deferred (e.g., sending email, analytics)
	- Communication between loosely coupled microservices
	- Buffering spikes in workload
	
	![](../Images/Common%20Tools%20(Message%20Brokers).png)
	
	## ⚙️ How Does It Work?
	 **Producer**: Publishes a message/event to a **Queue/Topic**
    **Broker**: Stores messages temporarily (Kafka, RabbitMQ, etc.)
    **Consumer**: Listens to the queue/topic and processes the message
	
	🧠 Real-World Example (User Signup Email)
	**sequenceDiagram**
	User->>API Server: Signup request
	API Server->>Kafka: Publish "UserSignedUp" event
	Note right of API Server: Response sent immediately
	Kafka->>Email Service: Consumes event, sends email
	
	![](../Images/Kafka%20vs%20RabbitMQ.png)
	
	## 🧪 Key Terms
	- **Topic** (Kafka) / **Queue** (RabbitMQ): Where messages are published
    - **Producer**: Publishes messages
    - **Consumer**: Subscribes and processes messages
    - **Broker**: Manages storage and delivery of messages
    - **Backpressure**: Controlling message flow when consumers lag
	
	## 🎯 Interview-Ready Answer:
	Asynchronous processing helps decouple services and improves responsiveness by offloading work to background systems like Kafka or RabbitMQ. It’s essential for scalability and reliability, especially in microservices. Kafka is great for high-throughput, persistent event streams, while RabbitMQ works well for task distribution.

2.  **Publisher - Subscriber model**
	✅What is the Publisher-Subscriber (Pub/Sub) Model?
	=> The **Pub/Sub model** decouples the sender (publisher) of a message from the receivers (subscribers).
	🔁 Instead of directly sending data to each consumer, the publisher **sends messages to a channel (called a "topic")**, and any subscriber to that topic receives the message.
	
	### 🧠 Real-World Analogy
	Think of a **magazine subscription**:
		Publisher = Magazine company
		Topic = “Technology Monthly”
		Subscriber = You
		You get all issues because you subscribed to that topic — even though the publisher doesn't know who you are.
	
	🔄 Flow Diagram
	sequenceDiagram
	Publisher->>Message Broker: Publish "OrderCreated" to topic
	Message Broker->>Subscriber A: Sends message
	Message Broker->>Subscriber B: Sends message
	Note right of Message Broker: Publisher doesn’t know who subscribers are
	
	![](../Images/Benefits%20of%20PUB-SUB.png)
	![](../Images/Popular%20tools%20that%20use%20PUB-SUB.png)
	![](../Images/Difference%20pub-sub%20and%20queue.png)
	## 🎯 Interview-Ready Summary
	The Pub/Sub model allows decoupling of services by letting publishers emit events to a topic without knowing who the subscribers are. It enables scalable and flexible communication in distributed systems, as seen in Kafka, RabbitMQ, and Google Pub/Sub. It’s ideal for broadcasting events to multiple services like logging, monitoring, or triggering downstream actions