
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
	
	
	Q. How Redirection is Handled
	> When you click a short link, your browser makes a request to the **shortener’s server**, which looks up the destination in a high-speed database and sends back an **HTTP 301/302 status code**. This instruction tells your browser to instantly "jump" to the long URL without the shortener ever having to load the final page itself.

	Q. How URLs are Shortened
	>Shorteners assign each long URL a unique **ID number** in their database and then convert that number into **Base 62** ($0-9, a-z, A-Z$). This math allows them to compress a massive numeric ID into a tiny, 6 or 7-character string that acts as a unique key.