import React, { useState } from "react";

const UseStateHook: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <h1>useState Hook</h1>

      <br></br>
      <br></br>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {counter}
      <input
        placeholder="enter something..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {input}

      <br></br>
      <br></br>

      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>

      <br></br>
      <br></br>

      <div>
        <button onClick={() => setName("Docker")}>Set Name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
};

export default UseStateHook;
