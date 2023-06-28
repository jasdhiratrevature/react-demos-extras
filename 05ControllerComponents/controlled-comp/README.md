the input field shows an empty field, the output paragraph shows the initial state. Only when you start typing into the input field, both elements seem to synchronize, but they don't, because the input field still tracks its own internal state while the output paragraph is driven by the actual React state coming from the handler function. So even though they output the same when you start typing, the underlying source of the value is different:

input field receives its value from internal DOM node state
output paragraph receives its value from React's state

---
By giving the input the value from React's state, it doesn't use its internal state anymore, but the state you provided from React. Now the initial state should be seen for the input field and for the output paragraph once you start the application. Also when you type something in the input field, both input field and output paragraph are synchronized by React's state. The input field has become a controlled element

---
### differences between Controlled and Uncontrolled Components in React JS?
- In a controlled component, form data is handled by a React component. Whereas in uncontrolled components, form data is handled by the DOM itself.
- Usage of Component State is a must for controlled components. Use of state is completely optional for uncontrolled components, but one must use Refs in it.
- With controlled components, we can validate as the input is being changed but the same is not possible with uncontrolled components.