import {useState} from 'react';

const Counter = () => {
    // const stateArray = useState(0); // We're setting default value to zero.
    // const getCount = stateArray[0]; // Read the value.
    // const setCount = stateArray[1]; // Write a new value.

    const [getCount, setCount] = useState(0); // Array destructuring is a nice one-liner!

    const clickHandler = () => {
        // getCount = getCount + 1; // WRONG! BAD!
        // setCount(getCount + 1); // This is okay!
        setCount((currentCount) => {
            return currentCount + 1;
        });
    };

    return (
        <section>
            <h2>Our Counter</h2>
            <p>Current count is: {getCount}</p>
            <button onClick={clickHandler}>Update Count</button>
        </section>
    );
};

export default Counter;
