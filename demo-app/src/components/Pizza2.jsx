import { useState } from 'react';

const Pizza2 = () => {
    const [pizza, setPizza] = useState({
        toppings: ['cheese'],
        crust: 'stuffed'
    });

    const [crust, setCrust] = useState('');
    const [newTopping, setNewTopping] = useState('');

    const addTopping = () => {
        setPizza((prev) => {
            const pizzaClone = {...prev};
            pizzaClone.toppings = [...pizzaClone.toppings, newTopping];
            return pizzaClone;
        });
        setNewTopping('');
    };

    const addCrust = () => {
        setPizza((prev) => {
            const pizzaClone = {...prev};
            pizzaClone.crust = crust;
            return pizzaClone;
        });
        setCrust('');
    };

    const toppingsListItems = pizza.toppings.map((topping, index) => {
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
            <h3>Your Crust is: {pizza.crust}</h3>
            <label htmlFor="new-crust">Please enter your desired crust:</label>
            <input
                id="new-crust"
                type="text"
                value={crust}
                onChange={(event) => {setCrust(event.target.value);}} />
            <button onClick={addCrust}>Set Crust</button>
        </>
    );
};

export default Pizza2;
