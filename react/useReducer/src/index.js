
import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// function App() {
//   const [number, setNumber] = useReducer((number, newNumber) => {console.log(number, newNumber); return (number + newNumber);}, 0)
  
//   return <h1 onClick={() =>setNumber(2)}>{number}</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div className="App">
      <input type="checkbox" id="s0" value={checked} onChange={toggle} />
      <label for="s0"> I have a bike</label>
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);