import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import SayHello from './components/SayHello';
import Counter from './components/Counter';
import PizzaPlaceTwoState from './components/PizzaPlaceTwoState';
import PizzaPlaceObjectState from './components/PizzaPlaceObjectState';
import PizzaPlaceWithReducer from './components/PizzaPlaceWithReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <PizzaPlaceWithReducer heading="useReducer-based state! 🍕🍕🍕" />
    <PizzaPlaceObjectState heading="One big Object state! 🍕🍕" />
    <PizzaPlaceTwoState heading="Two useStates! 🍕" />
    <Counter />
    <Counter heading="My Second Counter! 🎉" />
    <section>
      <h2>Hellos!</h2>
      {SayHello({name: 'Erin'})}
      <SayHello name="Daniel" />
      <SayHello />
    </section>
  </>
);
