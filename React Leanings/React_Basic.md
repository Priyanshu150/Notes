Q. Why was react created ??
- Ghost problem
- Inconsistent UI 

>React is a #library to create UI components 

State is manage by JS 
UI is managed by DOM
Communication b/w State and UI is done by React

### Create React App
-  CRM (https://react.dev/learn)
	npx create-react-app <project_name>                     //react initialization
	npm run start  / npm start 		                                  // preferred npm run 
	npm run build

- Vite (It is a bundler) (https://vite.dev/)
	npm create vite@latest

Note :- Read the script inorder to find what to use in term of running the project
#### React has 2 implementation 
	1. React DOM (web dev)
	2. React Native (mobile dev)


 > Create a custom #Custom_React_App

{username} -> evaluate expression
This is used to add variable in HTML

Example :- h1 Hello World {username} /h1

Note :- [<> </> is called fragment ]

### Q. What happens when function render in react ?
- Rendering is just React "calling" the function component to determine what the UI should look like.
- Local variables are reset, but state and props persist.
- React uses the returned JSX to efficiently update the DOM by comparing it with previous DOM and changing it where it's needed using React's **Reconciliation Algorithm** (via a process called diffing)
- If the component uses hooks like `useEffect`, React runs the effect after committing updates to the DOM.

### **Triggering Re-renders**

A function component renders (or re-renders) when:

- **Props change:** A parent component passes new props.
- **State changes:** State variables are updated using `useState`.
- **Context updates:** If the component consumes a context, it re-renders when the context value changes.
- **Force update:** A parent re-renders or you explicitly trigger a re-render.





