import React, { useState, useEffect, useRef } from 'react';
import './App.css';
//Para aceder al DOM y para guardar el valor previo
function App3() {
  const [name, setName] = useState('');
  //   const inputRef = useRef();
  const prevName = useRef('');
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  //   function focus() {
  //     inputRef.current.focus();
  //     inputRef.current.value = 'some text';
  //   }

  return (
    <div>
      <input
        // ref={inputRef}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      {/* <button onClick={focus}>Focus</button> */}
    </div>
  );
}

export default App3;
