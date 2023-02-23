import { useState } from 'react';

const PizzaPlace = (props) => {
    const [newTopping, setNewTopping] = useState('');
    const [toppings, setToppings] = useState(['cheese']);

    const handleChange = (event) => {
        // event.target.value is the value attribute of the <input>
        // ^ From the BROWSER! The real updated value.
        setNewTopping(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // push to array

        setToppings((prev) => {
            // prev.push(newTopping); // nono! editing existing state (REF)
            const newArr = [...prev, newTopping];
            return newArr; // prev === newArr ? false
        });

        setNewTopping('');
    };

    return(
        <section>
            <h2>{props?.name || 'Pat\'s Pizza Place'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Please enter a new topping:
                    <input
                        type="text"
                        onChange={handleChange}
                        value={newTopping}
                    />
                </label>
                <input type="submit" value="Add Topping" />
            </form>
            <p>New Topping: {newTopping}</p>
            <h3>Requested Toppings:</h3>
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
