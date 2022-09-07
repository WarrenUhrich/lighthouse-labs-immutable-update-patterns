import { useState } from 'react';

const Counter = () => {
    // const countState = useState();
    // const count = countState[0];
    // const setCount = countState[1];
    let [count, setCount] = useState(0);

    const handleClick = () => {
        // count = count + 1;
        // console.log(count);
        setCount((prev) => {
            return prev + 1;
        });
    };

    return (
        <button onClick={handleClick}>
            Clicked {count} Times
        </button>
    );
};

export default Counter;
