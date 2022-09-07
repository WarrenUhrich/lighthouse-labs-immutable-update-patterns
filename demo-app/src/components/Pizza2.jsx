import { useState } from 'react';

import Toppings2 from './Toppings2';
import Crust2 from './Crust2';

const Pizza = ({heading}) => {
    const [state, setState] = useState({
        toppings: ['Cheese'],
        crust: 'Regular'
    });

    const addTopping = (newTopping) => {
        setState((prev) => {
            return {
                ...prev,
                toppings: [...prev.toppings, newTopping]
            }
        });
    };

    const updateCrust = (newCrust) => {
        setState((prev) => {
            return {...prev, crust: newCrust}
        });
    };

    const listOfToppings = state.toppings.map((topping, index) => {
        return <li key={index}>{topping}</li>;
    });

    return (
        <section>
            <h2>{heading || 'Pizza Component'}</h2>
            <h3>Forms:</h3>
            <Toppings2 addTopping={addTopping} />
            <Crust2 crust={state.crust} updateCrust={updateCrust} />
            <h3>Your Pizza:</h3>
            <h4>Toppings:</h4>
            <ul>
                {listOfToppings}
            </ul>
            <h4>Crust:</h4>
            <p>{state.crust}</p>
        </section>
    );
};

export default Pizza;