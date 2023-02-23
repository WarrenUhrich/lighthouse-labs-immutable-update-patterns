import { useState } from 'react';

const PizzaPlaceWithObjState = (props) => {
    const [state, setState] = useState({
        newTopping: '',
        toppings: ['cheese']
    });

    const handleChange = (event) => {
        setState((prev) => {
            return {...prev, newTopping: event.target.value};
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setState((prev) => {
            return {
                ...prev,
                toppings: [...prev.toppings, state.newTopping],
                newTopping: ''
            };
        });
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
                        value={state.newTopping}
                    />
                </label>
                <input type="submit" value="Add Topping" />
            </form>
            <p>New Topping: {state.newTopping}</p>
            <h3>Requested Toppings:</h3>
            <ul>
                {state.toppings.map((topping, index) => {
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

export default PizzaPlaceWithObjState;
