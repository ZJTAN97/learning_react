import React, { useState } from 'react'


const UseStateHook: React.FC = () => {


    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState("");

    return (
        <div>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
            {counter}
            <input placeholder="enter something..."  onChange={(e) => {setInput(e.target.value)}} />
            {input}
        </div>
    )
}


export default UseStateHook;
