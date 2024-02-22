import React, { useReducer } from 'react';
import pizzaPlaceReducer from '../reducers/pizzaPlaceReducer';

const PizzaPlace = (props) => {
    const [state, dispatch] = useReducer(pizzaPlaceReducer, {
        crust: 'thin',
        toppings: ['cheese']
    });

    const handleChange = (event) => {
        const action = {
            type: 'UPDATE_CRUST',
            payload: event.target.value
        };
        dispatch(action);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const input = event.target.children[0].children[0];
        // // console.log('input:', input);

        // // Toppings is an array, it is mutable, and it is by-reference(pointer!)
        const action = {
            type: 'ADD_TOPPING',
            payload: input.value
        };
        dispatch(action);
        // // prevToppings === newToppings
        // // originalArr  === originalArr // true

    };

    return (
        <section>
            <h2>{props.heading ? props.heading : 'Pizza Component'}</h2>

            <label>
                Describe desired crust:
                <input
                    type="text"
                    onChange={handleChange}
                    value={state.crust}
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
            <p>{state.crust}</p>

            <h4>Toppings:</h4>
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

export default PizzaPlace;
