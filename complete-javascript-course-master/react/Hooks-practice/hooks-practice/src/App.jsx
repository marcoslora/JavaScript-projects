import React, { useState } from 'react';
import './App.css';
console.log('d');
function App() {
  //currente state, update current
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');
  function decrementCount() {
    //remenber how to assign
    //PreCount asigna el valor anterior para evitar errores por multiples actulizaciones
    setCount(prevCount => prevCount - 1);
    // setTheme('blue');
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1);
    setTheme('red');
  }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
