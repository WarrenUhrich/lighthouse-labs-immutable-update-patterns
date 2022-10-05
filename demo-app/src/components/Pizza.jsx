import { useState } from 'react';

const Pizza = (props) => {
    const [newTopping, setNewTopping] = useState('');
    const [toppings, setToppings] = useState(['pineapple']);
    const [crust, setCrust] = useState('Regular');

    const handleToppingSubmit = (event) => {
        event.preventDefault();

        // setToppings((prev) => {
        //     const newArray = [...prev]; // Shallow copy... now React knows it is a new value - re-renders.
        //     newArray.push(newTopping);
        //     return newArray;
        // });

        setToppings((prev) => {
            // return [newTopping, ...prev];
            return [...prev, newTopping];
        });

        setNewTopping('');
    };

    return (
        <section>
            <h2>{props.heading || 'Pizza Component'}</h2>
            <h3>Toppings Form</h3>
            <form onSubmit={handleToppingSubmit}>
                <label>
                    Enter a Topping:
                    <input
                        value={newTopping}
                        onChange={(event) => {setNewTopping(event.target.value);}}
                    />
                </label>
                <input type="submit" value="Add Topping" />
            </form>
            <h4>Current Toppings</h4>
            <ul>
                {toppings.map((topping, index) => {
                    return <li key={index}>{topping}</li>
                })}
            </ul>
            <h3>Crust Form</h3>
            <form onSubmit={(event) => {event.preventDefault();}}>
                <label>
                    Please select your desired crust:
                    <select value={crust} onChange={(event) => {setCrust(event.target.value);}}>
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
            <h4>Current Crust: {crust}</h4>
        </section>
    );
};

export default Pizza;
