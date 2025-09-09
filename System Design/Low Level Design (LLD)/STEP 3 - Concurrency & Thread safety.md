
1. Thread safe injection
	**Thread-safe injection** ensures that when a dependency (object, service, or resource) is injected into different parts of a multithreaded program, it can be safely used by multiple threads **without causing race conditions, data corruption, or inconsistent state**.
	
	It usually comes up in the context of:
	- **Dependency Injection (DI) frameworks** (like Spring, Guice, Dagger).
	- **Singleton services** in multithreaded environments.
	- **Shared resources** like DB connections, caches, or loggers.
	
	# 🎯 **Interview-Ready Answer**
	"Thread-safe injection means ensuring that dependencies provided by a DI container can be safely used across multiple threads. If a dependency is injected as a singleton, it must be thread-safe (e.g., using immutable objects or thread-safe collections). Otherwise, race conditions and data corruption may occur. For non-thread-safe objects, use request-scoped or prototype instances."


2. Locking mechanisms 
3. producer - consumer 
4. race conditions & synchronization
