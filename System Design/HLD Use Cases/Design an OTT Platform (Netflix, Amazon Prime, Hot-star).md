An OTT is a service that delivers digital content, like movies and TV shows, directly to consume via internet.

1. Functional Requirement 
	- Users should be able to create account and opt for subscription
	- Users should be able to search and find movies/shows based on product title or names 
	- Users can watch videos in different resolution (1080p, 4K, etc.)
	- Users should be to watch the video without nominal or negligible buffering 
	
2. Non-Functional Requirement 
	- Scale: 200M users and 10k total videos (~1 hour each)
	- CAP Theorem: Highly available >> consistency -- consistency with respect to placing the order & payment 
	- low-latency video streaming 
	
3. Identify Core Entity
	- user
	- user metadata
	- video 
	- video metadata & static image
	
4. API Designing 
	![](Image/api%20info%20of%20ott.png)
5. High Level Design
	![](Image/HLD%20of%20OTT.png)
6. Low / Deep Dive Design
	![](Image/LLD%20of%20OTT.png)

How this adaptive streaming works :
- Switching happens only at keyframes.
- There is a video segment of 10 second.
- Now let assume the keyframe is set at 6th second.
- At this keyframe point depending on the client bandwidth and network, client make request for the next video segment (or same or different resolution).

For reference how DASH and HLS differs: 
![](Image/dash%20and%20hls.png)

Estimation:
10k videos :  720p - 10 GB/hr, 1080p - 20 GB/hr, 1440p - 30 GB/hr 
total :- 40 GB * 10K = 400K GB = 400 TB

