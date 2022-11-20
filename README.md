<h1> :books: React Core Notes :books: </h1>

# :snowflake: When does react render? :snowflake:

1. state changes
2. parent component renders
3. prop changes
4. shouldComponentUpdate function returns true
5. forceUpdate

for numbers 1 and 2, React decides whether to render through shallow compare.
I.E. pass by referenced values (shallow copy)

<br>
<br>

# :snowflake: Rendering Elements :snowflake:

-   elements are the smallest building blocks of React apps.
-   Unlike browser DOM elements, React elements are plain objects and are cheap to create.
-   React DOM takes care of updating the DOM to match the React elements.
-   To render a React element, first pass the DOM element to `ReactDOM.createRoot()` then pass React element to `root.render()`

```
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);

```

<br>
<br>

# :snowflake: Updating rendered element :snowflake:

-   React elements are immutable, you cannot change its children or attributes.
-   (nobody does this but...) the only way to update the UI is to create a new element and pass it to root.render, you can use the following example for learning purposes

```
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

```

<br>
<br>

# :snowflake: Components and Props :snowflake:

-   components are like javascript functions, accept arbitrary input called "props" and return React elements describing what should appear on the screen.

<br>
<br>

# :snowflake: React `Refs` :snowflake:

-   `Refs` provide a way to access DOM nodes or React elements created in the render method.

<br>

### Some use cases of refs are

-   Managing focus, text selection or media playback
-   Triggering imperative animations
-   Integrating with 3rd party DOM libraries

<br>

### The `useRef` hook

-   allows you to persist values between renders
-   used to store mutable value that does not cause a re-render when updated
-   can be used to access a DOM element directly

<br>

### Forwarding Refs

-   A helper function to forward a component's ref to another one.
-   By default, the ref prop only works on HTML elements, not on React components.
-   When we want to pass down a reference to a React component, we need to tell React which HTML element it should reference, as there can be more than one in our component.

<br>
<br>
