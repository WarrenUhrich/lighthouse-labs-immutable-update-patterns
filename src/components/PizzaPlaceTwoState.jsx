import React, { useState } from 'react';

const PizzaPlaceTwoState = (props) => {
    const heading = props.heading ? props.heading : 'Pizza Place Two State';

    const [crust, setCrust] = useState('thin');
    const [toppings, setToppings] = useState(['cheese']);

    const handleChange = (event) => {
        const eventElement = event.target;
        const inputElementValue = eventElement.value;

        setCrust(inputElementValue); // oldCrust !== newCrust triggers re-render
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from trying to submit to a back-end causing page refresh
    
        const form = event.target;
        const label = form.children[0];
        const input = label.children[0];
        const inputValue = input.value; // What the user typed in.
        input.value = ''; // Clear so it is easy to type a new topping

        setToppings(prev => {
            const newToppingsArr = [...prev];
            newToppingsArr.push(inputValue);
            return newToppingsArr; // Replaces old state.
        }); // oldArr !== newArr
    };

    return (
        <section>
            <h2>{heading}</h2>

            <div>
                <label>
                    Enter Your Crust Preference:
                    <input type="text" value={crust} onChange={handleChange} />
                </label>
            </div>

            <form onSubmit={handleSubmit}>
                <label>
                    Enter Desired Topping:
                    <input type="text" />
                </label>
                <input type="submit" value="Add Topping" />
            </form>

            <h3>Crust:</h3><p>{crust}</p>
            <h3>Toppings:</h3>
            <ul>
                {toppings.map((topping, index) => <li key={index}>{topping}</li>)}
            </ul>

        </section>
    );
};

export default PizzaPlaceTwoState;
