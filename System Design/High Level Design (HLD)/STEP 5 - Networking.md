
1. TCP V/S UDP
	**TCP (Transmission Control Protocol)** and **UDP (User Datagram Protocol)** are the two core **transport layer protocols** in the **Internet Protocol Suite (TCP/IP)**
	They both send data over the network — but in very **different** ways.
	
	### 🔁 TCP – Reliable & Connection-Oriented
		✅ Key Features:
		Connection-Oriented (3-way handshake)
		Reliable – guarantees delivery
		Ordered – packets arrive in order
		Error-checked* and retransmitted if lost
		Slower due to overhead
	    
		🧠 Real-world Use Cases:
		Web browsing (HTTP/HTTPS)
		Email (SMTP, IMAP, POP3)
	    File transfer (FTP, SFTP)
	    Database connections (MySQL, PostgreSQL)
	
	⚡ UDP – Fast & Connectionless
		✅ Key Features:
		- Connectionless
		- Unreliable– no guarantee of delivery or order
	    - No retransmission of lost packets
	    - Very fast, low overhead
	    
		🧠 Real-world Use Cases:
		Live streaming (YouTube Live, Twitch)
	    Online gaming
	    VoIP calls (Zoom, Skype)
	    DNS queries
	    Video conferencing
	
	![](../Images/comparision_table_tcp_and_udp.png)



2. What is http (1/2/3) & https 
	**HTTP (HyperText Transfer Protocol)** is the **application-layer protocol** used for communication between **clients (like browsers)** and **servers** on the web.
	
	## 📜 **HTTP/1.0 (Legacy - 1996)**
		Every single request (image,CSS,JS,HTML) required a new TCP connection.
	    No keep-alive → Too many handshakes = slow websites.
    💥 **Problem**: High latency, redundant connections, poor performance for modern webpages with 100+ assets.
	
	## ⚙️ **HTTP/1.1 (Standard for 15+ years)**
	✅ Improvements:
		Persistent Connections (Keep-Alive): Reuse same TCP connection
		Pipelining (but rarely used): Try sending multiple requests without waiting
	    Chunked Transfers: Stream data progressively
	    
	 ❌ But major limitation:
		Head-of-Line Blocking (HoLB) – only one outstanding request is handled at a time in a connection.  
		Others wait, even if ready!
	💡 Example: You open Amazon.com → 1 HTML + 20 images = delays due to sequential handling.
	
	## ⚡ **HTTP/2 (2015)**
		A complete rewrite of how data flows between client & server — but keeping the same HTTP semantics (GET, POST, etc.)
	
	✅ Major Fixes:
		Binary Protocol (faster parsing than text)
	    Multiplexing – multiple parallel requests over a single TCP connection!
	    Header Compression (HPACK)
	    Server Push – server can proactively send assets before the client asks
    
	⚠️ Still suffers from:
		TCP-level Head-of-Line Blocking: If one packet is lost → entire TCP stream is held up
	    Especially bad on mobile networks
	💡 Example: On HTTP/2, if 1 image packet is lost, **ALL parallel streams stall**, even for CSS/JS.
	
	## 🚀 **HTTP/3 (2022 – based on QUIC)**
		Built to eliminate **TCP bottlenecks** by using **UDP + QUIC**.
	
	✅ Fixes in HTTP/3:
		**No TCP** → Uses **UDP** with QUIC (reliable, multiplexed, encrypted)
	    **0-RTT**: Connection starts instantly (no TCP + TLS handshake delay)
	    **Independent Streams**: Packet loss in one doesn’t block others
	    **Built-in encryption (TLS 1.3)**
    💡 On mobile or flaky Wi-Fi, HTTP/3 performs **much better** than HTTP/2.
    
	🧠 What Is QUIC (used in HTTP/3)?
		QUIC = Quick UDP Internet Connections  
		A protocol developed by Google, using **UDP** with built-in **TLS**, **multiplexing**, and **0-RTT** (zero round-trip) handshakes.
	
	## 🔐 What is HTTPS?
		HTTPS = HTTP + TLS encryption
		It secures the communication between browser and server
	    TLS adds a handshake before HTTP messages start flowing
	    This can be done with any version of HTTP
	    Protects against **eavesdropping**, **tampering**, and **MITM attacks**
		Mandatory for login forms, payment gateways, modern websites, etc.
	
	
	![](../Images/http_versions_comparisions.png)
	
	YouTube links :- https://www.youtube.com/watch?v=UMwQjFzTQXw and https://www.youtube.com/watch?v=ocGtt0IX0Js

3. Web sockets
	**Web Sockets** are a communication protocol that provides a **full-duplex**, **persistent**, and **bi-directional** connection between client and server over a **single TCP connection**.
	Unlike HTTP, which is **request-response based**, Web Sockets allow both client and server to **send messages at any time** — without re-establishing the connection.
	
	Examples :- Chat apps, Live stock data, multiplayer games, live score apps, dashboards
	
	![](../Images/features_of_websockets.png)
	![](../Images/how_websocket_works.png)
	![](../Images/scaling_webSockets.png)


4. WEBRTC and video streaming 