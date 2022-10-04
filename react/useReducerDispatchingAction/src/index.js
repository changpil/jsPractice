
import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const initialState = {
  message: "hi"
}

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {message: `HEY!! I just Said ${state.message}`};
    case "wispher":
      return {message: `execuse me !! I just Said ${state.message}`};
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
     <p>Message: {state.message}</p>
     <button onClick={()=>dispatch({type:"yell"})}>YELL</button> <br/>
     <button onClick={()=>dispatch({type:"wispher"})}>whisper</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);