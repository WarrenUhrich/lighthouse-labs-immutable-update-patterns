import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HelloWorld from './components/HelloWorld';
import SayHello from './components/SayHello';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

const sayHelloProps = {name: 'Michael'};

root.render(
  <React.StrictMode>
    <HelloWorld />
    <SayHello name="Jacky" />
    <SayHello name="Rebecca" />
    <SayHello />
    <SayHello {...sayHelloProps} /> {/* SayHello({name: 'Michael'}) */}
    <Counter />
  </React.StrictMode>
);
