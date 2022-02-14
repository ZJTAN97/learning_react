import React, { useState } from "react";
import FunctionalCounter from "./FunctionalCounter";
import ClassCounter from "./ClassCounter";
import './App.css';

function App() {

  const [showCounter, setShowCounter] = useState(false);
  const [showClassCounter, setShowClassCounter] = useState(false);

  return (
    <div className="App">
      <h1>React component lifecycle Classes vs Functional</h1>
      <h1>Functional Based</h1>
      <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        { showCounter ? "Hide Functional Counter" : "Show Functional Counter" }
      </button>
      {showCounter && <FunctionalCounter />}
      </div>
      <br></br>
      <h1> Class Based</h1>
      <div>
        <button onClick={() => setShowClassCounter(!showClassCounter)}>
          { showClassCounter ? "Hide Class Counter" : "Show Class Counter" }
        </button>
        {showClassCounter && <ClassCounter />}
      </div>


    </div>
  );
}

export default App;
