import React, { useState } from 'react';
import './App.css';

function slowFunction(num) {
  console.log('Calling Slow Function');
  for (let i = 0; i < 100; i++) {}
  return num * 2;
}

function App2() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Change theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

export default App2;
