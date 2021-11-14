import React, { useEffect, useState } from 'react'


const UseEffectHook: React.FC = () => {


    const [counter, setCounter] = useState(0);
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((response:any) => response.json())
          .then(data => {
              console.log("API IS CALLED.")
              setData(data[0].email)
          } )
      }, []);

    return (
        <div>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
            {counter}
            {data}
        </div>
    )
}


export default UseEffectHook;
