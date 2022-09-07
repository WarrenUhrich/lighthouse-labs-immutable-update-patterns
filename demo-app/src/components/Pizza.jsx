import { useState } from 'react';

import Toppings from './Toppings';
import Crust from './Crust';

const Pizza = ({heading}) => {
    const [toppings, setToppings] = useState(['Cheese']);
    const [crust, setCrust] = useState('Regular');

    const listOfToppings = toppings.map((topping, index) => {
        return <li key={index}>{topping}</li>;
    });

    return (
        <section>
            <h2>{heading || 'Pizza Component'}</h2>
            <h3>Forms:</h3>
            <Toppings setToppings={setToppings} />
            <Crust crust={crust} setCrust={setCrust} />
            <h3>Your Pizza:</h3>
            <h4>Toppings:</h4>
            <ul>
                {listOfToppings}
            </ul>
            <h4>Crust:</h4>
            <p>{crust}</p>
        </section>
    );
};

export default Pizza;