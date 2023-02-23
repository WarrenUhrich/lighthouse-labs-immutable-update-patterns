import { useState } from 'react';

export default function Counter() {
    const countState = useState(0); // This gives us an array.
                                    // [currentVal, updateFunc]
    // console.log(countState);

    const count = countState[0]; // Current state value.
    const setCount = countState[1]; // React function for changing state.

    const handleClick = () => {
        setCount((prev) => {
            return prev + 1;
        }); // Every time setCount is run...
            // React will compare prev and the return
            // IF there is a change (if they aren't equal)
            // ... THEN the component will RE-RENDER
    };

    return (
        <section>
            <h2>Counter Component</h2>
            <p>Counter has been clicked {count} times.</p>
            <button onClick={handleClick}>
                Click to Increment
            </button>
        </section>
    );
}
