import React, { useReducer } from 'react';
import pizzaPlaceReducer from '../reducers/pizzaPlaceReducer';

const PizzaPlaceWithReducer = (props) => {
    const heading = props.heading ? props.heading : 'Pizza Place Two State';

    // Every dispatch we'll pass an action object:
    // { type: 'UPDATE_CRUST' || 'ADD_TOPPING', payload: 'data' }
    const [state, dispatch] = useReducer(pizzaPlaceReducer, {
        crust: 'thin',
        toppings: ['cheese']
    });

    const handleChange = (event) => {
        const eventElement = event.target;
        const inputElementValue = eventElement.value;

        const action = { type: 'UPDATE_CRUST', payload: inputElementValue };
        dispatch(action); // Pokes our reducer, the action-type and payload are used to update state.
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from trying to submit to a back-end causing page refresh
    
        const form = event.target;
        const label = form.children[0];
        const input = label.children[0];
        const inputValue = input.value; // What the user typed in.
        input.value = ''; // Clear so it is easy to type a new topping

        const action = { type: 'ADD_TOPPING', payload: inputValue };
        dispatch(action);
    };

    return (
        <section>
            <h2>{heading}</h2>

            <div>
                <label>
                    Enter Your Crust Preference:
                    <input type="text" value={state.crust} onChange={handleChange} />
                </label>
            </div>

            <form onSubmit={handleSubmit}>
                <label>
                    Enter Desired Topping:
                    <input type="text" />
                </label>
                <input type="submit" value="Add Topping" />
            </form>

            <h3>Crust:</h3><p>{state.crust}</p>
            <h3>Toppings:</h3>
            <ul>
                {state.toppings.map((topping, index) => <li key={index}>{topping}</li>)}
            </ul>

        </section>
    );
};

export default PizzaPlaceWithReducer;
