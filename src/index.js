import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import SayHello from './components/SayHello';
import Counter from './components/Counter';
import PizzaPlace from './components/PizzaPlace';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <PizzaPlace heading="Luiza's Pizzas" />
    <PizzaPlace heading="Matthew's Pizzeria" />
    <Counter />
    {SayHello({name: 'Alysha'})}
    {SayHello({name: 'Sasha'})}
    <SayHello name="Luiza" />
    <SayHello name="Charli" />
  </>
);
