import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Hello from './components/Hello';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <Hello name="Dani" />
  </React.StrictMode>
);

