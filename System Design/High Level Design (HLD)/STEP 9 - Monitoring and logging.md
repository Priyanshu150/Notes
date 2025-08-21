
1. Logging events & monitoring metrics 
	
	## 🧾Logging Events
	Logging captures **detailed records** of what’s happening inside an application at **runtime**.
	
	✅ Why Logs Matter
	- Debug production issues
	- Track user behavior
	- Detect failures
	- Conduct audits
	- Understand sequence of events
	![](Images/Log%20Levels.png)
	
	### 🧰 Logging Tools
	- **ELK Stack**: Elasticsearch, Logstash, Kibana
	- **Fluentd + Loki + Grafana**
	- **Cloud-native**: AWS CloudWatch, GCP Stackdriver, Azure Monitor
	
	## 📈Monitoring Metrics
	Metrics are **numerical values** collected over time to understand system health.
	![](Images/Common%20Metrics.png)
	![](Images/Metric%20Types.png)
	### 📊 Tools for Metrics
	- **Prometheus** (most popular for microservices)
    - **Grafana** (dashboard for visualizing metrics)
    - **Datadog**, **New Relic**, **CloudWatch**, **AppDynamics**
	
	![](Images/Loggin%20vs%20Metrics%20vs%20Tracing.png)
	
	## 💡 Interview-Ready Summary
	In production systems, we use **centralized logging** (ELK stack) to debug errors and audit flows.  For **real-time health**, we monitor metrics like latency, error rates, and system resource usage using **Prometheus** and **Grafana**.  We set up alerts to proactively catch failures, and use tracing for inter-service call debugging in microservices.

2. Anomaly Detection 
	**Anomaly Detection** is the process of **identifying unusual patterns** or behaviors in data that do not conform to expected norms.
	Think of it as your system’s early warning system 🚨 — it spots problems **before they cause failures**.
	![](Images/Why%20is%20Anomaly%20Detection%20Imp.png)
	![](Images/Types%20of%20Anomalies.png)
	
	## 🔩 Where is Anomaly Detection Used?
	🔐 **Security**: Intrusion detection
    📉 **Performance**: Latency spikes, traffic drops
    💳 **Finance**: Fraud detection
    🔬 **DevOps**: Detect memory leaks, broken cron jobs
    📡 **IoT/Streaming**: Sensor malfunctions, device abuse
	
	![](Images/Tools%20&%20Frameworks%20for%20anomalies%20detection.png)
	[Metric Logs / Events]
        ↓
	[Aggregation & Time Series DB]
        ↓
	[Anomaly Detection Logic]
        ↓
	[Alerting System]
        ↓
	[DevOps / Engineers]
	
	## 💬 Interview-Ready One-Liner
	Anomaly Detection helps catch unexpected system or business behavior early — like a sudden latency spike, or fraudulent activity.  We can use simple thresholding or ML-based models depending on complexity. It's critical for observability in large-scale distributed systems.