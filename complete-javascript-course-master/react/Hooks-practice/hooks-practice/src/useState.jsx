import React, { useState, useEffect } from 'react';
import './App.css';
console.log('d');
function App() {
  //currente state, update current
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');
  const [resourceType, setResourceType] = useState('posts');
  //useEfect ciclo de vida lo monta al inicializar o cuando el parametro cambie.
  useEffect(() => {
    console.log('render');
  }, [resourceType]);
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
      <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </div>
  );
}

export default App;
