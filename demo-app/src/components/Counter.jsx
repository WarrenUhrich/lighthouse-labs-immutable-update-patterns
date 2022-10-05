import { useState } from 'react';

const Counter = () => {
    // const countState = useState(0); // zero is the default value
    // const count = countState[0];
    // const setCount = countState[1];

    const [count, setCount] = useState(0); // Array destructuring...
    // Grabs item 1 and 2 from the array and names their variables.

    const handleClick = () => {
        // setCount(count + 1);
        setCount((prev) => {
            return prev + 1;
        });
        // console.log(count);
    };

    return (
        <button onClick={handleClick}>
            This button has been clicked {count} times.
        </button>
    );
};

export default Counter;
