import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HelloWorld from './components/HelloWorld';
import SayHello from './components/SayHello';
import BadCounter from './components/BadCounter';
import Counter from './components/Counter';
import PizzaPlace from './components/PizzaPlace';
import PizzaPlaceWithObjState from './components/PizzaPlaceWithObjState';

const root = ReactDOM.createRoot(document.getElementById('root'));

const sayHelloProps = {name: 'Michael'};

root.render(
  <React.StrictMode>
    <PizzaPlaceWithObjState />
    <PizzaPlace name="Lighthouse Labs Pizza Parlour" />
    <HelloWorld />
    <SayHello name="Jacky" />
    <SayHello name="Rebecca" />
    <SayHello />
    <SayHello {...sayHelloProps} /> {/* SayHello({name: 'Michael'}) */}
    <Counter />
  </React.StrictMode>
);
