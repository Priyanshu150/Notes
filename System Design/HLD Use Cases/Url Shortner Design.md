
	Url shortner website let you shorten long Url to short Url and custom links

1. Functional Requirement 
	- Create a short url from long url 
		- supports custom url
		- supports expiration date 
	- User should get redirected to the original url from short url
	
2. Non - Functional Requirement 
	- Low latency (url - creating, on redirect ~200ms )
	- Scale : 100M DAU / 1B url 
	- shorten url should be unique 
	- CAP : Availability >> consistency (eventual)
	
3.  Identity entity 
	- short url 
	- long url 
	- user 
	
4. API Design
	- POST : - /name/v1/   => short url 
		{
			long-url 
			customUrl?
			ExpirationDate?
		}
	- GET :- /name/v1/{shortUrl}
	
5. High Level Design 
	![](Image/HLD%20for%20Url%20shortner.png)
	
6. Low Level Design 
	**Approach1** :- Use hashing technique on longUrl to and take first 4-5 char from the hash string
	Challenge :- A lot of collisions 
	![](Image/app1%20url%20shortner.png)
	
	**Approach2** :- Use counter for every new request coming 
	Challenge :- Every server will have there own count, hence duplicate url 
	![](Image/app2%20url%20shortner.png)
	
	**Approach3** :- Use combination of multiple key, Hash + count + server name + id + timestamp an so on 
	![](Image/app3%20url%20shortner.png)