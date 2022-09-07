import { useState } from 'react';

import Toppings from './Toppings';

const Pizza = ({heading}) => {
    const [toppings, setToppings] = useState(['Cheese']);

    const listOfToppings = toppings.map((topping, index) => {
        return <li key={index}>{topping}</li>;
    });

    return (
        <section>
            <h2>{heading || 'Pizza Component'}</h2>
            <Toppings setToppings={setToppings} />
            <ul>
                {listOfToppings}
            </ul>
        </section>
    );
};

export default Pizza;