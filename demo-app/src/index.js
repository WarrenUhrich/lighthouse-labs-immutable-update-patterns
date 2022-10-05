import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import HelloWorld from './components/HelloWorld';
import HelloYou from './components/HelloYou';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloYou />
    <HelloYou name="Shaun" />
    {/* HelloYou({name: "Shaun"}) */}
  </React.StrictMode>
);
