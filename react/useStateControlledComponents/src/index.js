
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*
Controlled Component is that you handle form inputs using state variables
*/

function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");
  // const sound = useRef();
  // const color = useRef();

  const submit = (e) => {
    e.preventDefault(); //prevent this form from reloading as soon as I click that form
    // const soundVal = sound.current.value;
    // const colorVal = color.current.value;
    // alert(`${soundVal} sound like ${colorVal}`)
    alert(`${sound} sound like ${color}`)
    // sound.current.value=""
    // color.current.value=""
    setSound("");
    setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      <input value={sound} type="text" placeholder="......" onChange={(e) => setSound(e.target.value)} />
      <input value={color} type="color" onChange={(e) => setColor(e.target.value)}/>
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