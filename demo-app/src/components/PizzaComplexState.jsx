import { useState } from 'react';

const PizzaComplexState = (props) => {
    const [state, setState] = useState({
        newTopping: '',
        toppings: ['anchovies'],
        crust: 'Regular'
    });

    const handleToppingSubmit = (event) => {
        event.preventDefault();

        setState((prev) => {
            return {
                ...prev,
                toppings: [...prev.toppings, state.newTopping],
                newTopping: '' // Clear field for next topping
            };
        });
    };

    return (
        <section>
            <h2>{props.heading || 'Pizza Component'}</h2>
            <h3>Toppings Form</h3>
            <form onSubmit={handleToppingSubmit}>
                <label>
                    Enter a Topping:
                    <input
                        value={state.newTopping}
                        onChange={(event) => {setState((prev) => {
                            return {
                                ...prev, // Include old state.
                                newTopping: event.target.value // Overrides existing topping.
                            };
                        });}}
                    />
                </label>
                <input type="submit" value="Add Topping" />
            </form>
            <h4>Current Toppings</h4>
            <ul>
                {state.toppings.map((topping, index) => {
                    return <li key={index}>{topping}</li>
                })}
            </ul>
            <h3>Crust Form</h3>
            <form onSubmit={(event) => {event.preventDefault();}}>
                <label>
                    Please select your desired crust:
                    <select
                        value={state.crust}
                        onChange={(event) => {setState((prev) => {
                            return {...prev, crust: event.target.value};
                        });}}
                    >
                        <option value="Regular">
                            Regular
                        </option>
                        <option value="Thin">
                            Thin
                        </option>
                        <option value="Thick">
                            Thick
                        </option>
                        <option value="Stuffed">
                            Stuffed
                        </option>
                        <option value="Cauliflower">
                            Cauliflower
                        </option>
                    </select>
                </label>
            </form>
            <h4>Current Crust: {state.crust}</h4>
        </section>
    );
};

export default PizzaComplexState;
