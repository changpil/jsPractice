import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [status, setStatus] = useState(false);
  console.log(status);
  return (
    <div className="App">
      <input type="checkbox" id="s0" value={status} onChange={() => setStatus(!status)} />
      <label for="s0"> I have a bike</label>
      <p>{status ? "checked" : "not checked"}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
