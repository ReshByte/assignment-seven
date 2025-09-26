1.What is JSX, and why is it used?

Answer: JSX is a syntax extension for JavaScript that allows developers to write HTML-like markup directly within their JavaScript files.
Why is it used:Declarative Syntax,Reusability,Integration with JavaScript and Increased security.


2.What is the difference between State and Props?

Answer: State:Managed internally by the component and mutable . Props: Passed from parent component and immutable. 


3.What is the useState hook, and how does it work?

Answer:The useState hook is a function that allows you to add state to a functional component. It is an alternative to the useReducer hook that is preferred when we require the basic update.
How it works: initialization,destructuring,re-rendering.

4.How can you share state between components in React?

Answer:Lifting State Up - Remove the state from the child components and move it to their closest common parent component.


5.How is event handling done in React?

Answer:Declarative Event Handlers in JSX like onClick
Example:

    function Btn() {
      function handleBtn() {
        alert('This is Reshat Bro!');
      }

      return (
        <button onClick={handleBtn}>
          Click Me
        </button>
      );
    }
