// Define a context
import React from 'react';

const MyContext = React.createContext('default value');

// Use the context in a component
function MyComponent() {
  const contextValue = React.useContext(MyContext);

  return (
    <div>
      <p>Context value: {contextValue}</p>
    </div>
  );
}

// Use the component with the context provider
function App4() {
  return (
    <MyContext.Provider value="Hello from context!">
      <MyComponent />
    </MyContext.Provider>
  );
}

export default App4;
