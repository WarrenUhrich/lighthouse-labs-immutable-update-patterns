import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Hello from './components/Hello';
import Counter from './components/Counter';
import Pizza from './components/Pizza';
import Pizza2 from './components/Pizza2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pizza heading="OBJECT STATE VER. Make a Pizza!" />
    <Pizza heading="Make Your Pizza!" />
    <Counter />
    <Hello name="Dani" />
  </React.StrictMode>
);

