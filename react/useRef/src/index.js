
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function App() {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault(); //prevent this form from reloading as soon as I click that form
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sound like ${colorVal}`)
    sound.current.value=""
    color.current.value=""
  };

  return (
    <form onSubmit={submit}>
      <input ref={sound} type="text" placeholder="......" />
      <input ref={color} type="color" />
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