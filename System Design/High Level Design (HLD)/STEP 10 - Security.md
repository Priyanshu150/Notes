
1. Tokens for auth
	Tokens are **digital keys** used in modern authentication to verify a user or service’s identity — **without repeatedly sharing a username/password**.
	
	## 🧠 Why Tokens?
	✅ **Stateless**: No session data stored on server
    🔁 **Reusable**: Once authenticated, the token can be sent with each request
    🔐 **More secure**: Password is never stored or sent again after login
    🌍 **Scalable**: Works well with distributed & microservices architecture
	![](../Images/Common%20types%20of%20tokens.png)
	![](../Images/JWT%20token%20example.png)
	![](../Images/Bearer%20Token%20example.png)
	🔁 How Token-Based Auth Works
		[User Login]
		   ↓
		[Server verifies creds]
		   ↓
		[Server issues token]
		   ↓
		[Client stores token (localStorage/cookie)]
		   ↓
		[Client sends token in each request]
		   ↓
		[Server verifies token]
	
	## 📆 Expiry & Refresh
	- Access tokens = **short-lived** (e.g., 15 minutes)
    - Refresh tokens = **long-lived** (e.g., 30 days)
    - When access token expires → **refresh token** is used to get a new one
    ![](../Images/When%20to%20use%20what%20tokens.png)
	
	## 🧱 Statelessness in Microservices
	- Since token carries **all auth data**, no session is needed
	- Works great with **horizontal scaling**, **load balancers**, **CDNs**
	
	## 💬 Interview One-Liner
	Tokens like JWTs allow secure, stateless authentication in modern systems. They eliminate session storage and scale well across distributed environments. Expiry and refresh strategies protect against misuse.”

2. SSO & OAuth
	## 🧠 **What is SSO (Single Sign-On)?**
	**SSO** allows users to **log in once** and gain access to **multiple applications/services** without needing to re-authenticate.
	
	✅ Real-world example:
	Login with Google → You can access Gmail, YouTube, Google Drive **without logging in again.**
	
	### 🛠️ **How SSO Works**
	1) You try to access `App A`
	2) You’re redirected to an **Identity Provider (IdP)** (like Google, Okta)
	3) You log in **once** to IdP
	4) The IdP verifies credentials and returns a **token** or **assertion**
	5) App A trusts the token and logs you in
	6) When you go to `App B`, it reuses that token without asking for login again
	
	### 🎯 Benefits of SSO
	- Better user experience (only one login)
	- Fewer credentials = fewer security risks
	- Easier centralized management of users
	- Used heavily in enterprises, SaaS, and Google/MS ecosystems
	
	## 🔑 **What is OAuth?**
	**OAuth** is an **authorization** framework that lets third-party apps access a user’s data **without knowing the user’s password**.
	OAuth lets you log in **with** Google, Facebook, GitHub etc., but they never share your password.
	
	### ⚙️ How OAuth Works (Simplified)
	1) You click **“Login with Google”** on a third-party app
	2) App redirects you to **Google's login page**
	3) You **authenticate with Google**
	4) Google asks: "Do you allow this app to access your email/profile?"
	5) You approve → Google sends a **temporary token** to the app
	6) The app uses that token to access your data **without your password**
	
	![](../Images/OAuth%20Roles.png)
	![](../Images/SSO%20vs%20OAuth.png)
	
	## 🔐 Can OAuth Be Used for SSO?
	Yes — with **OpenID Connect** (OIDC) on top of OAuth 2.0, you can implement **SSO**.
	Example: Google’s "Login with Google" uses OAuth 2.0 + OIDC.
	
	## 🧠 Interview One-Liner
	SSO enables users to access multiple apps using one login by relying on a trusted identity provider. OAuth is an authorization protocol that allows third-party apps to access user data securely, without sharing passwords.

3. Access control lists and Rule Engines 
	## ✅ **Access Control Lists (ACLs)**
	An **ACL** is a **list of permissions** attached to a resource (e.g., file, database record, API route).  
	It defines **which users or roles** can **access, modify, or delete** that resource.
	
	### 🔐 How it Works:
	1) A user requests access to a resource.
	2) System checks the **ACL** attached to the resource.
	3) If the user/role has the required permission → ✅ access is granted.
	4) Otherwise → ❌ denied.
	
	### 🎯 Where ACLs are used:
	- File systems (Unix, Windows)
	- Cloud storage (S3 bucket policies)
	- APIs (who can read/write/delete a resource)
	- RBAC systems (Role-based Access Control)
	
	### ✅ Pros:
	- Simple and intuitive
	- Fine-grained control per resource
	❌ Cons:
	- Can be hard to manage at scale (millions of users/resources)
	- Hardcoding ACLs can make policy changes slow
	
	⚙️ **Rule Engines**
	A **Rule Engine** is a **software component** that evaluates **dynamic business rules** (conditions + actions) and makes decisions automatically.
	
	 #Example: If order amount > ₹10,000 and user is a VIP, then apply 10% discount.
	 
	#Real-world Analogy: Just like traffic signals **automatically decide** when to turn red/green based on rules (e.g., timers, sensors), a rule engine makes business decisions based on configured rules.
	
	That’s a **business rule**. Instead of coding this logic everywhere, you write rules into a rule engine (like Drools or Open Policy Agent).
	![](../Images/ACL%20vs%20Rule%20Engine.png)
	
	- 🔒 **OPA (Open Policy Agent)**: Popular rule engine for access control
	- 📊 Rule engines are often embedded into **microservices** to separate business logic from code

4. Encryption and Decryption 
	## 🔐 What is Encryption?
	**Encryption** is the process of converting **readable data (plaintext)** into **unreadable data (ciphertext)** using a **key**, so unauthorized users cannot understand it.
	
	## 🔓 What is Decryption?
	 **Decryption** is the reverse process—converting **ciphertext** back into **plaintext**, using a key (usually the same or a different one depending on encryption type).
	
	## 🔑 Why Encryption Matters (System Design Context)
	- **Protect user data** (passwords, personal info, card details)
	- Secure **data in transit** (e.g., HTTPS traffic)
	- Secure **data at rest** (e.g., database, file systems)
	- Avoid **data breaches** and comply with **regulations** (like GDPR, HIPAA)
	
	## 🔧 Types of Encryption
	1) **Symmetric Encryption**
	- Uses **same key** to encrypt and decrypt.
	- 🔑 Fast and efficient
	- 🔒 Problem: Key must be **securely shared**
    **Examples:** AES, DES
	
	1)  **Asymmetric Encryption (Public Key Cryptography)**
	- Uses **public key to encrypt**, **private key to decrypt**
	- 🔑 No need to share private key
	- 🔐 Slower than symmetric
    **Examples:** RSA, ECC
	**Used in:**
	- SSL/TLS (to establish secure connection)
	- JWT Tokens (signing and verification
	- Secure messaging
	
	![](../Images/Common%20use%20Patterns%20(encryption).png)
	
	## 🔐 Encryption in Action (System Design Perspective)
	**Example: Login Flow**
	User logs in via HTTPS → Password is encrypted in transit (TLS)
	Server stores hashed password (not encrypted) → Compare hash
    On success → Generate JWT signed using private key (asymmetric)
    Client stores JWT and sends it in headers (bearer token)
	
5. End to End encryption (E2EE) vs Server side encryption (SSE)
	## 1️⃣ **End-to-End Encryption (E2EE)**
	- Data is **encrypted on the client** and **only decrypted on the recipient’s client**.
	- The **server cannot read** the content → it only passes encrypted data around.
	- Keys are **never shared with the server**.
    
    ✅ **Pros**:
    - Maximum privacy (server/operator can’t spy).
    - Protects against server hacks/leaks.
    - Used in secure messaging (WhatsApp, Signal).
    ❌ **Cons**:
    - Harder to implement (key management).
    - Limits server features (e.g., full-text search).
    - If user loses key → data unrecoverable.
    
    📱 **Example**: WhatsApp messages, Signal calls.
	
	## 2️⃣ **Server-Side Encryption (SSE)**
	- Data is **sent plaintext to the server**, which then encrypts it **before storing** (DB, disk, S3).
	- Server **can decrypt anytime** because it manages keys.
	
    ✅ **Pros**:
    - Easy to implement (handled at storage layer).
    - Good for compliance (GDPR, HIPAA, etc.).
    - Works for large-scale storage (cloud providers).
    ❌ **Cons**:
    - Server has full access to plaintext.
    - If server compromised → attacker can decrypt.
    - Not true privacy against provider.
    
    📂 **Example**:
    - AWS S3 with SSE-S3 (Amazon manages keys).
    - Databases encrypting data-at-rest.
	
	# 🏗 **Where they are used in System Design**
	- **E2EE** → Messaging systems, Healthcare, Banking (privacy-first).
	- **SSE** → Cloud storage, Logging systems, Data lakes (compliance + performance).

6. Hashing vs Encryption vs Encoding 
	## 1️⃣ **Hashing**
	- **One-way transformation** → cannot (practically) be reversed.
	- Always produces the **same output for same input**.
	- Used for **integrity & verification**, not secrecy.
	- Example algorithms: **SHA-256, MD5, bcrypt**.
    ✅ **Use cases**:
    - Password storage (hash + salt).
    - File integrity check (e.g., Git, checksums).
    - Digital signatures.
    
    📦 **Analogy**:  Like taking **fingerprints** 🖐️. You can identify someone from it, but you can’t recreate the person from their fingerprint.
	
	## 2️⃣ **Encryption**
	- **Two-way transformation** → you can **encrypt** and then **decrypt** with a key.
	- Goal: **Confidentiality** (protect data from unauthorized access).
	- Types:
    - **Symmetric** (AES) → same key for encryption & decryption.
    - **Asymmetric** (RSA, ECC) → public key to encrypt, private key to decrypt.
    
    ✅ **Use cases**:
    - HTTPS traffic (TLS).
    - Secure messaging (WhatsApp, Signal).
    - Banking transactions.
    
    📦 **Analogy**:  Like **locking a box** with a key 🔑. Anyone with the right key can unlock it.
	
	## 3️⃣ **Encoding**
	- **Reversible transformation**, but **not for security** — only for **data representation**.
	- No keys, no secrecy.
	- Example: **Base64, URL encoding, ASCII, UTF-8**.
    
    ✅ **Use cases**:
    - Sending binary data (images, files) over text-based protocols (e.g., email).
    - Making URLs safe.
    - Character set conversions.
    
    📦 **Analogy**:  Like **translating a book into another language** 🌍. Anyone can read if they know the language, no secrecy involved.
	
	![](../Images/Hashing%20vs%20Encryption%20vs%20Encoding.png)

7. Encryption at Rest vs In Transit
	## 1️⃣ **Encryption at Rest**
	- **What it means**: Data stored on a disk/database is encrypted.
	- Protects against:
		- **Physical theft** (hard drives, stolen DB backups).
		- **Unauthorized access** to storage systems.
	- Usually uses **symmetric encryption (AES-256)**.
	- Implemented at:
		- Disk level (full-disk encryption).
		- Database level (TDE → Transparent Data Encryption).
		- File/object storage (e.g., S3 bucket encryption).
		
	✅ **Example**:
	- A customer’s credit card info stored in a DB is encrypted using AES-256.
	- Even if a hacker steals the raw database file, they only see gibberish without the key.
	
	## 2️⃣ **Encryption in Transit**
	- **What it means**: Data moving across a network (client ↔ server, or server ↔ server) is encrypted.
	- Protects against:
		- **Eavesdropping** (man-in-the-middle attacks).
		- **Tampering** with messages.
	- Uses **TLS/SSL** (asymmetric + symmetric combo).
	- Common in **HTTPS, VPNs, SSH, gRPC secure connections**.
    
    ✅ **Example**:
    - When you enter your password on a website, TLS ensures it’s encrypted while traveling from your browser to the server.
	
	![](../Images/Encryption%20at%20Rest%20and%20Transit.png)


8. Public key Infrastructure 
	👉 PKI is the framework of **policies, roles, processes, and technologies** that manages **digital certificates** and **public-private key pairs** to enable **secure communication** over untrusted networks.
	In simple terms:  
	➡️ It’s the system that makes **public key cryptography usable at scale** (so the world can safely use HTTPS, VPNs, email signing, etc.).
	
	# 🏗️ **Components of PKI**
		Public & Private Keys
		 - Each entity (server, user, app) has a key pair.
		 - Private key: kept secret.
	    - Public key: shared with the world.
	
		Certificate Authority (CA)
		- Trusted organization that issues digital certificates.
		- Example: DigiCert, Let’s Encrypt.
		- Ensures the public key really belongs to the entity (domain/company).
        
        Registration Authority (RA)
        - Acts as a verifier for the CA.
        - Checks identity before certificate issuance.
        
        Digital Certificates (X.509)
        - Bind a public key with identity (domain, org, user).
        - Used in HTTPS (`.crt` files).
        
		Certificate Revocation List (CRL) / OCSP
		- Mechanism to revoke compromised/expired certificates.
	
	# 🔐 **How PKI Works (Example: HTTPS Website)**
	-  You visit `https://example.com`.
	- The server presents a **digital certificate** issued by a CA.
	- Your browser verifies:
		- Certificate validity.
		- Trusted CA signed it.
		- Domain matches.
	- If valid → Browser trusts server’s **public key**.
	- TLS handshake happens:
		- Symmetric session key is generated.
		- Encrypted with server’s public key.
		- Only the server (with private key) can decrypt it.
    ✅ Result: Your communication is now **secure, encrypted, and authenticated**.
	
	# 📌 **Why PKI is Needed**
	- Without PKI, anyone could claim to be "Google.com" by presenting a fake key.
	- PKI provides:
		- **Authentication** (you are talking to the right server).
		- **Confidentiality** (data is encrypted).
		- **Integrity** (no tampering).
	
	# 🛠️ **Where PKI is Used**
	- HTTPS (TLS/SSL).
	- VPNs (IPSec, OpenVPN).
	- Email encryption (S/MIME).
	- Code signing (verify software isn’t tampered).
	- IoT device authentication.
	
	![](../Images/PKI.png)
	
	⚡ **Interview Tip**:  PKI solves the problem of securely distributing and validating public keys at scale. Without PKI, we couldn’t trust if a public key actually belongs to a server, user, or attacker. It’s the backbone of HTTPS and secure communication.