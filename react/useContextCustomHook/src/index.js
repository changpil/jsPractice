import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
/*
Controlled Component is that you handle form inputs using state variables
*/

const TreesContext = createContext();
export const useTrees = () => useContext(TreesContext);

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Cedar" },
  { id: "4", type: "Apple" },
  { id: "5", type: "Pine" }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={(trees)}>
    <App />
  </TreesContext.Provider>
);