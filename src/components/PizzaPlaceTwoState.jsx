import React, { useState } from 'react';

const PizzaPlace = (props) => {
    const [crust, setCrust] = useState('thin');
    const [toppings, setToppings] = useState(['cheese']);

    const handleChange = (event) => {
        setCrust(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const input = event.target.children[0].children[0];
        // console.log('input:', input);

        // Toppings is an array, it is mutable, and it is by-reference(pointer!)
        setToppings((prevToppings) => {
            const newToppingsArr = [...prevToppings, input.value];
            return newToppingsArr;
        });
        // prevToppings === newToppings
        // originalArr  === originalArr // true

    };

    return (
        <section>
            <h2>{props.heading ? props.heading : 'Pizza Component'}</h2>

            <label>
                Describe desired crust:
                <input
                    type="text"
                    onChange={handleChange}
                    value={crust}
                />
            </label>

            <form onSubmit={handleSubmit}>
                <label>
                    Add topping:
                    <input type="text"/>
                </label>
                <button type="submit">
                    Click to Add
                </button>
            </form>

            <h3>Your Pizza:</h3>

            <h4>Crust:</h4>
            <p>{crust}</p>

            <h4>Toppings:</h4>
            <ul>
                {toppings.map((topping, index) => {
                    return (
                        <li key={index}>
                            {topping}
                        </li>
                    );
                })}
            </ul>

        </section>
    );
};

export default PizzaPlace;
