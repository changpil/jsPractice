
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useFetch } from "./useFetch"

function App({ login }) {
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);
  if (loading)
    return <h1>Loading ... </h1>;
  if (error)
    return (<pre>{JSON.stringify(error, null, 2)}</pre>);
  console.log("data")
  console.log(data)
  if (data)
    return (
      <div>
        {data.login && <h1>{data.login}</h1>}
        <img src={data.avatar_url} alt={data.login} />
        <div>
          {data.name && <p>NAME: {data.name}</p>}
          {data.location && <p>LOCATION: {data.location}</p>}
        </div>
        <i>{JSON.stringify(data, null, 2)}</i>
      </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App login="changpil" />
);