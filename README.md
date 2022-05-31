# learning_react

Learning notes for React with TypeScript

<hr>

## 1. When does react render?

1. state changes
2. parent component renders
3. prop changes
4. shouldComponentUpdate function returns true
5. forceUpdate

for numbers 1 and 2, React decides whether to render through shallow compare.
I.E. pass by referenced values (shallow copy)
<br>

<hr>

## 2. Rendering Elements

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
<hr>

## 3. Updating rendered element

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
<hr>

## 4. Components and Props
- components are like javascript functions, accept arbitrary input called "props" and return React elements describing what should appear on the screen.