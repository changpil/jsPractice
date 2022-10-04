import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [status, setStatus] = useState("Not stated");
  console.log(status);
  return (
    <div className="App">
      <h1> Hello!  {status} </h1>
      <button onClick={() => (status == "stated") ? setStatus("not stated") : setStatus("stated")}
      > toggle </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
