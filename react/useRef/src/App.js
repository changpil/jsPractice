import logo from './logo.svg';
import './App.css';

function App(pros) {
  console.log(pros)
  return (
    <div className="App">
      <h1> Hello!  {pros.name[0]} </h1>
    </div>
  );
}

export default App;
