
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useInput} from "./useInput"
/*
Controlled Component is that you handle form inputs using state variables
*/

function App() {
  const [titleProps, resetTitle] = useInput("")
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault(); //prevent this form from reloading as soon as I click that form

    alert(`${titleProps.value} sound like ${colorProps.value}`)
    resetTitle("");
    resetColor("");
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="......" />
      <input {...colorProps} type="color" />
      <button> ADD </button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);