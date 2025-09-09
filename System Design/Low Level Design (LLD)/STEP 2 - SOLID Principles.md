1.  **Single Responsibility Principle (SRP)**
	- **Definition:** A class should have **only one reason to change**.
	- **Why:** Keeps code clean, reduces bugs when requirements change.
	- **Analogy:** A restaurant chef should cook, not also do billing + cleaning.
	
	![](Images/SRP%20bad%20ex.png)
	![](Images/SRP%20good%20ex.png)

2. **Open-Closed Principle (OCP)**
	- **Definition:** Classes should be **open for extension but closed for modification**.
	- **Why:** You don’t want to modify old code every time a new feature comes.
	
	![](Images/OCP%20Bad%20ex.png)
	![](Images/OCP%20good%20ex.png)

3. **Liskov Substitution Principle (LSP)**
	- **Definition:** Subclasses should be **substitutable** for their parent classes.
	- **Why:** If code using parent breaks when you pass child, LSP is violated.
	- **Analogy:** If Bird can fly, then every subclass (Sparrow, Parrot) should fly. But what about Ostrich? 🦤
	
	![](Images/LSP%20bad%20ex.png)
	![](Images/LSP%20good%20ex.png)

4. **Interface Segregation Principle (ISP)**
	- **Definition:** Don’t force classes to implement methods they don’t need.
	- **Why:** Prevents “fat” interfaces.
	- **Analogy:** A waiter shouldn’t be forced to also implement cooking methods.
	
	![](Images/ISP%20bad%20ex.png)
	![](Images/ISP%20good%20ex.png)

5. **Dependency Inversion Principle (DIP)**
	- **Definition:** Depend on **abstractions, not concrete classes**.
	- **Why:** Makes code flexible, testable.
	- **Analogy:** A plug depends on socket **interface** (shape/voltage), not on a particular brand.
	
	![](Images/DIP%20bad%20ex.png)
	![](Images/DIP%20Good%20ex.png)

# ✅ Summary (to fit in your mind forever):
- **SRP** → One class, one job.
- **OCP** → Add new, don’t modify old.
- **LSP** → Subclasses should fit parent’s shoes.
- **ISP** → Don’t force unwanted methods.
- **DIP** → Depend on interfaces, not implementations.