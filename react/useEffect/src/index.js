import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [name, setName] = useState("Jan")
  useEffect(() => {
    document.title = `Celebrate ${name}`
    console.log(`useEffect Called ${name}`)
  }, [name]);

  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    document.title = `Celebrate ${name}`
    console.log(`useEffect Called ${name}`)
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not admin"}`)
  }, [admin]);

  return (
    <section>
      <p> Congratuation !! {name}</p>
      <button onClick={() => setName("will")}> Change Winner </button>
      <p>{admin ? "log in" : "not logged in"}</p>
      <button onClick={() => setAdmin(true)}>Logged in</button>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
