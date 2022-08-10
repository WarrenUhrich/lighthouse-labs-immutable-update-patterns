import { useState } from 'react';

const Pizza = () => {
    const [toppings, setToppings] = useState(['cheese']);
    const [newTopping, setNewTopping] = useState('');

    const addTopping = () => {
        // toppings.push(newTopping); // NEVER CHANGE STATE DIRECTLY!
        // setToppings([...toppings, newTopping]);
        setToppings((prev) => {
            return [...prev, newTopping];
        });
        setNewTopping('');
    };

    const toppingsListItems = toppings.map((topping, index) => {
        return <li key={index}>{topping}</li>;
    });

    return(
        <>
            <h2>Create Your Own Pizza!</h2>
            <label htmlFor="new-topping">Please enter a pizza topping:</label>
            <input
                id="new-topping"
                type="text"
                value={newTopping}
                onChange={(event) => {setNewTopping(event.target.value);}} />
            <button onClick={addTopping}>Add Topping</button>
            <h3>Your Toppings:</h3>
            <ul>{toppingsListItems}</ul>
        </>
    );
};

export default Pizza;
