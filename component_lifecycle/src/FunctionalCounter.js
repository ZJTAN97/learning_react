import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // componentDidMount
  // useEffect(() => {
  //   console.log("The use effect ran");
  // }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log("The use effect ran");
  // }, [count]);

  // componentWillUnmount
  // useEffect(() => {
  //   console.log("The use effect ran");
  //   return () => {
  //     console.log("the return is being ran");
  //   };
  // }, []);

  useEffect(() => {
    console.log(`The count has updated to ${count}`);
    return () => {
      console.log(`we are in the cleanup - the count is ${count}`);
    };
  }, [count]);

  return (
    <div>
      <h6> Counter </h6>
      <p> current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
    </div>
  );
};

export default Counter;
