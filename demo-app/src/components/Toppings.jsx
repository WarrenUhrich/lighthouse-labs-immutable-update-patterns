import { useState } from 'react';

const Toppings = ({setToppings}) => {
    const [newTopping, setNewTopping] = useState('');

    const handleChange = (event) => {
        setNewTopping(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Please don't REALLY submit to a new page!
        setToppings((prev) => {
            // Returns a BRAND NEW array, with a topping at the end.
            return [...prev, newTopping];
        });
        setNewTopping('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Type in a New Topping
                <input
                    type="text"
                    value={newTopping}
                    onChange={handleChange} />
            </label>
            <input type="submit" value="Add Topping" />
        </form>
    );
};

export default Toppings;
