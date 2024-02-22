const UPDATE_CRUST = 'UPDATE_CRUST';
const ADD_TOPPING = 'ADD_TOPPING';

// 2 params:
// 1. CURRENT_STATE!
// 2. ACTION! -> An object with a `type`, and sometimes a `payload`
const pizzaPlaceReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_CRUST:
            return { ...state, crust: action.payload };
        case ADD_TOPPING:
            return { ...state, toppings: [...state.toppings, action.payload] };
        default:
            throw Error('Unknown action.');
    }
};

export default pizzaPlaceReducer;
