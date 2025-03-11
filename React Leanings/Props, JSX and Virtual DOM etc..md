
#JSX :- _JSX_ stands for JavaScript XML. _JSX_ allows us to write HTML in React. _JSX_ makes it easier to write and add HTML in React.

#HOOKS :- Function and value to execute task

- UseState -> used for state management
		=> const [counter, setCounter] = useState(15)

- UseEffect ->
- UseRef ->
- useCallback -> 

#PROPS :- properties passed via JSX code 

	ex -> <Card username="testing" /> 

#Virtual_Dom and #React_Alog :- 
	 
	 https://github.com/acdlite/react-fiber-architecture

Q. Interview_question :- Using useState(15), if we click on button what'll be the value of counter and the function is doing below operations 

	setCounter(counter + 1)
	setCounter(counter + 1)
	setCounter(counter + 1)
	setCounter(counter + 1)

Ans. 16 (because of the Fibre algorithm of react)
  

