import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import HelloWorld from './components/HelloWorld';
import HelloYou from './components/HelloYou';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <HelloYou />
    <HelloYou name="Shaun" />
    {/* HelloYou({name: "Shaun"}) */}
  </React.StrictMode>
);
