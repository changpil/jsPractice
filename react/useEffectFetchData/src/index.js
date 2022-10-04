import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  document.title = `useEffectFetchData`;
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(data);
    fetch(`https://api.github.com/users`).
      then(response => response.json()).
      then(setData);
  }, []);
  console.log(data)
  if (data) {
    return (
      <>
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Reset Data</button>
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);