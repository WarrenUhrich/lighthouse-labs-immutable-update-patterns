import {useState} from 'react';

const Pizza = () => {
    const [toppings, setToppings] = useState(['cheese']);
    const [crust, setCrust] = useState('stuffed');

    const [newTopping, setNewTopping] = useState('');

    const updateNewTopping = (event) => {
        setNewTopping(event.target.value);
    };

    const addTopping = () => {
        setToppings((prev) => {
            return [
                ...prev,
                newTopping
            ];
        });
        setNewTopping('');
    };

    const mappedToppings = toppings.map((topping, index) => {
        return (
            <li key={index}>
                {topping}
            </li>
        );
    });

    return (
        <section>
            <h2>Make your own Pizza!</h2>
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
            <h3>Your Crust is: {crust}</h3>
            <label htmlFor="new-crust">Please enter your desired crust type:</label>
            <input
                id="new-crust"
                value={crust}
                onChange={(event) => {setCrust(event.target.value);}} />
        </section>
    );
};

export default Pizza;
