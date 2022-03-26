import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonTable from './components/ReactivePokemon/PokemonTable';
import UseStateHook from './components/UseStateHook';
import UseReducerHook from './components/UseReducerHook';
import UseEffectHook from './components/UseEffectHook';
import UseRefHook from './components/UseRefHook';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element ={<App />} />
      <Route path="pokemon" element={<PokemonTable />} />
      <Route path="useEffect" element={<UseEffectHook />} />
      <Route path="useReducer" element={<UseReducerHook />} />
      <Route path="useRef" element={<UseRefHook />} />
      <Route path="useState" element={<UseStateHook />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();