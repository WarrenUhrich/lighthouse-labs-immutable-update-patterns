import {useState} from 'react';

const Pizza2 = () => {
    const [pizza, setPizza] = useState({
        toppings: ['cheese'],
        crust: 'thin'
    });

    const [newTopping, setNewTopping] = useState('');

    const updateNewTopping = (event) => {
        setNewTopping(event.target.value);
    };

    const addTopping = () => {
        setPizza((prev) => {
            return {
                ...prev, // Spread the whole pizza...
                toppings: [
                    ...prev.toppings, // Spread the toppings array...
                    newTopping
                ]
            };
        });
        setNewTopping('');
    };

    const mappedToppings = pizza.toppings.map((topping, index) => {
        return (
            <li key={index}>
                {topping}
            </li>
        );
    });

    return (
        <section>
            <h2>Make your own Pizza! (VERSION 2)</h2>
            <label htmlFor="new-topping">Please enter a pizza topping:</label>
            <input
                id="new-topping"
                value={newTopping}
                onChange={updateNewTopping} />
            <button onClick={addTopping}>Add Topping</button>
            <h3>Your Toppings:</h3>
            <ul>
                {mappedToppings}
            </ul>
            <h3>Your Crust is: {pizza.crust}</h3>
            <label htmlFor="new-crust">Please enter your desired crust type:</label>
            <input
                id="new-crust"
                value={pizza.crust}
                onChange={(event) => {setPizza(
                    (prev) => {
                        return {
                            ...prev,
                            crust: event.target.value
                        }
                    }
                );}} />
        </section>
    );
};

export default Pizza2;
