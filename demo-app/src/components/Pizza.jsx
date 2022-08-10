import { useState } from 'react';

const Pizza = () => {
    const [toppings, setToppings] = useState(['cheese']);

    const toppingsListItems = toppings.map((topping, index) => {
        return <li key={index}>{topping}</li>;
    });

    return(
        <>
            <h2>Create Your Own Pizza!</h2>
            <label htmlFor="new-topping">Please enter a pizza topping:</label>
            <input id="new-topping" type="text" />
            <button>Add Topping</button>
            <h3>Your Toppings:</h3>
            <ul>{toppingsListItems}</ul>
        </>
    );
};

export default Pizza;
