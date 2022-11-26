import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to React Hooks Guide</h1>
      <ul>
        <Link to="pokemon">1. Pokemon Table Example</Link>
        <br></br>
        <br></br>
        <Link to="useEffect">2. useEffect Hook</Link>
        <br></br>
        <br></br>
        <Link to="useReducer">3. useReducer Hook</Link>
        <br></br>
        <br></br>
        <Link to="useRef">4. useRef Hook</Link>
        <br></br>
        <br></br>
        <Link to="useState">5. useState Hook</Link>
        <br></br>
        <br></br>
        <Link to="useContext">6. useContext Hook</Link>
        <br></br>
        <br></br>
      </ul>
    </div>
  );
};

export default App;
