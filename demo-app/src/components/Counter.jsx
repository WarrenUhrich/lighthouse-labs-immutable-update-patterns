import { useState } from 'react';

const Counter = () => {
    // const counterState = useState(0); // Returns an array.
    // const count = counterState[0];
    // const setCount = counterState[1];

    const [count, setCount] = useState(0);

    return (
        <button onClick={() => {setCount((prev) => {return prev + 1;})} /* setCount(count + 1) */}>
            This button has been clicked {count} times!
        </button>
    );
};

export default Counter;
