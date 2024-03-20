import React from 'react';

// Components are functions!
const SayHello = (props) => { // We can accept a parameter: props
    const name = props.name ? props.name : 'World';

    // Every component should return JSX (our UI.)
    return (
        <p>
            Hello, {name}!
        </p>
    );
};

export default SayHello;
