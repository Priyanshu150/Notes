
A framework for building fast & secure-engine friendly applications.

framework = library + tools + conventions

It comes with 
	1. Compiler 
	2. CLI
	3. Node.js Runtime

create a next project :- npx create-next-app@latest

>File structure :-
create file in auth folder to make a router 

>**Link** tag is used instead of a tag because it doesn't re-renders the page

>Rendering environment :-
client-side rendering v/s server-side rendering
'use client' :- for identifying it as client component 
whenever possible use server side components except for the component where we need user interaction

>Memory utilization :- 
there is always one more round trip in case of client side rendering, first time it loads html, css, js etc and other time data again coming from backend 
SE load all the data when page render on server side otherwise it show blank page

>Caching :- 
Using fetch next.js storing data in memory so that we don't have to fetch data again instead fetch it from local system.
1. memory
2. file system
3. network
going down the chain the data becomes more harder to access

If you've to fetch data continuously from API then change the default setting using few options.

>Static Rendering v/s Dynamic Rendering (Server side rendering types)
at build time means static rendering where each page renders at run time during build
at request time means dynamic rendering where each page renders depending on request


