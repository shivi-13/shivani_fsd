import React, { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum]=useState(0);
  const [res,setRes]=useState(0);

  return (
    <div className="App">
    <h1>CALCULATOR</h1>
     <input type="number"></input>
     <input type="number"></input>
     <br></br>
     <button>1</button>
     <button>2</button>
     <button>3</button>
     <button>+</button>
     <br></br>
     <button>4</button>
     <button>5</button>
     <button>6</button>
     <button>-</button>
     <br></br>
     <button>7</button>
     <button>8</button>
     <button>9</button>
     <button>/</button>
     <br></br>
     <button>0</button>
     <button>.</button>
     <button>*</button>
     <button>=</button>
    </div>
  );
}

export default App;
