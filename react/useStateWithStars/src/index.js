import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];


function Star({ selected = false, onSelect }) {
  return (<FaStar
    color={selected ? "green" : "red"}
    onClick={onSelect} />
  );
}


// function StarRating({ num = 5 }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return createArray(num).map((n, i) => (
//     <Star 
//       key={i} 
//       selected={selectedStars > i} 
//       onSelect={()=>setSelectedStars(i+1)}
//     />
//   ));
// }

function StarRating({ num = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
    {createArray(num).map((n, i) => (
    <Star 
      key={i} 
      selected={selectedStars > i} 
      onSelect={()=>setSelectedStars(i+1)}
    />
  ))}
  <p> {selectedStars} of {num} </p>
  </>
  )
}

function App() {
  return <StarRating num={10} />;

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
