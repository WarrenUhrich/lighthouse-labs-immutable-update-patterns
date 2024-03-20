import React, {useState} from 'react';

const Counter = (props) => {
    const heading = props.heading ? props.heading : 'My Counter';

    const [count, setCount] = useState(0);

    const handleClick = () => {
        // State changes check the previous value... if they are === it won't re-render.
        // If the values are !== then they WILL re-render your JSX!
        setCount(prev => prev + 1);
    };

    return (
        <section>
            <h2>{heading}</h2>
            <p>This button has been clicked {count} times.</p>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </section>
    );
};

export default Counter;
