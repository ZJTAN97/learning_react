import React, { useEffect, useState } from "react";

const UseEffectHook: React.FC = () => {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      // use state takes in function that gives the current value and you can mutate it
      setVal((v) => v + 1);
    }, 1000);

    // clean up function
    return () => window.clearInterval(timer);

  }, []);

  return <div>{val}</div>;
};

export default UseEffectHook;
