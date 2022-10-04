import { useContext } from 'react';
import './App.css';
import { TreesContext } from "./";

function App() {

  const trees = useContext(TreesContext);
  console.log(trees);
  return (
    <>
      <h1>Trees I've seen</h1>
      <ul>
        {trees.map(tree => (
          <li key={tree.id}> {tree.type}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
