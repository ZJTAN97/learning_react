import React from 'react';
import './App.css';
import UseStateHook from "./components/UseStateHook";
import UseReducerHook from './components/UseReducerHook';
import UseEffectHook from './components/UseEffectHook';
import UseRefHook from './components/UseRefHook';

const App: React.FC = () => {
  return (
    <div className="App">
      Change to whatever hooks you want to see.
      {/* <UseStateHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseEffectHook /> */}
      <UseRefHook />
    </div>
  );
}

export default App;
