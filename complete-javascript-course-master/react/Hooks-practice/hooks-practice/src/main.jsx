import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './useStateUse-effect';
import App2 from './useMemo';
import App3 from './useRef';
import App4 from './useContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App4 />
  </React.StrictMode>
);
