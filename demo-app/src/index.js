import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Hello from './components/Hello';
import Counter from './components/Counter';
import Pizza from './components/Pizza';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pizza heading="Make Your Pizza!" />
    <Counter />
    <Hello name="Dani" />
  </React.StrictMode>
);

