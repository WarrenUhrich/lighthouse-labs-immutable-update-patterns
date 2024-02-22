import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    // let variableCount = 0;

    const handleClick = () => {
        // variableCount++;
        setCount((prevCount) => {
            return prevCount + 1;
        });
        // oldCount=3 === newCount=4
        // If it is NOT equal, it re-runs the component function!
        console.log(count);
    };

    return (
        <section>
            <h2>Counter</h2>
            <button onClick={handleClick}>
                Clicked {count} times!
            </button>
        </section>
    );
};

export default Counter;
