import React, { useState, useMemo, useEffect } from 'react';
import './App.css';

function slowFunction(num) {
  console.log('Calling Slow Function');
  for (let i = 0; i < 10000000; i++) {}
  return num * 2;
}

function App2() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    console.log('use memo');
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);
  useEffect(() => {
    console.log('theme changed');
  }, [themeStyles]);
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
