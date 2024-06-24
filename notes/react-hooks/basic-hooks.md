<h1> :books: React Hook Notes :books: </h1>

# :snowflake: React.useCallback Hook :snowflake:

- Returns a memoized version of the callback function it is passed
- Means that the function object returned from `useCallback` will be the same between re-renders

<br>

### Background Info

- In JavaScript, function display referential equality, means they are only considered equal if they point to the same object
- Therefore if you were to declare two functions with identical implementations they would not be equal to each other

```
const firstFunction = function() {
    return 1 + 2; // same as secondFunction
}

const secondFunction = function() {
    return 1 + 2; // same as firstFunction
}

// Same implementation, different objects
firstFunction === secondFunction; // false

// Same objects!
firstFunction === firstFunction; // true

```

<br>

### When is this hook useful?

- `useCallback` is helpful when passing callback props to highly optimized child components.
- Example, if a child component accepts a callback prop which relies on a referential equality check to prevent unnecessary re-renders when the prop changes, then we will have to wrap the callback prop in `useCallback`

```
function ParentComponent() {
    const handleClick = React.useCallback(() => {
        // this will return the same function
        // instance between re-renders
    }, [])

    return (
        <ChildComponent>
            handleClick={handleClick}
        />
    )
}

```

### The purpose of useCallBack()

- Different function objects sharing the same code are often created inside React components

```
function MyComponent() {
  // handleClick is re-created on each render
  const handleClick = () => {
    console.log('Clicked!');
  };
  // ...
}

```

- `handleClick` is a different function object on every rendering of `MyComponent`
- Inline functions are cheap, re-creation on each rendering is not a problem

- However in some cases, you need to maintain a single function instance between renderings:
  - A functional component wrapped inside React.memo() accepts a function object prop
  - When the function object is a dependency to other hooks, e.g. useEffect(..., [callback])
  - When the function has some internal state, e.g. when the function is debounced or throttled.
