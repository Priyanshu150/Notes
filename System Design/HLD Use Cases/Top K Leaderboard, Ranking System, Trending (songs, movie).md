A real-time dashboard to track top players, ranks and scores across games, regions and time window with instant updates.

1. Functional Requirement 
	- User should be able to insert/update/delete data into our list (video/songs/leaderboard) (dynamic list)
	- user/client should be able to query top k trending videos/songs (in case of leaderboard) based on region / groups
	- Time period should be limited to {hour, day, month} and all time.


2. Non - Functional Requirement 
	- Scale : 1M req/sec, Billions of songs/videos/players 
	- CAP Theorem : Availability >> Consistency (eventual)
	- Latency : 100ms to get the k-result. New data update with 500ms (to give a soft-real time update)
	- Return accurate trending list / non probablistic

3. Entity 
	- Score / view / likes 
	- Player / video / songs
	- Timeframe (hour, day, month)

4. API
5. HLD 
	![](Image/HLD%20of%20top%20k%20list.png)
6. LLD