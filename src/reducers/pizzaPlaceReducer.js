/**
 * Actions
 * -------
 * What can we do with this reducer / state?
 */
const UPDATE_CRUST = 'UPDATE_CRUST';
const ADD_TOPPING  = 'ADD_TOPPING';

/**
 * Reducer Function
 * ----------------
 * How will our state be manipulated?
 */
const pizzaPlaceReducer = (state, action) => {
    // Normally action looks like this: {type: 'WHAT YOU WANT TO DO', payload: 'data'}
    switch(action.type) {
        case UPDATE_CRUST:
            const newCrust = action.payload;
            return { ...state, crust: newCrust };
        case ADD_TOPPING:
            const newTopping = action.payload;
            state.toppings = [...state.toppings, newTopping];
            return { ...state };
        default:
            throw Error(`Unknown action "${action.type}" in pizzaPlaceReducer.`);
    }
};

export default pizzaPlaceReducer;
