useRef is a React Hook that lets you reference a value that’s not needed for rendering.
const ref = useRef(initialValue)

---
useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.

---
the 2 main differences between reference and state:

- Updating a reference doesn't trigger re-rendering, while updating the state makes the component re-render;
- The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering).

---

Another useful application of the useRef() hook is to access DOM elements directly. This is performed in 3 steps:

Define the reference to access the element const elementRef = useRef();
Assign the reference to ref attribute of the element: `<div ref={elementRef}></div>;`
After mounting, elementRef.current points to the DOM element.