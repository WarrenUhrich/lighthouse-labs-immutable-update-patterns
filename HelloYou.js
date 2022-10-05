const helloYou = (props) => {
    return `Hello, ${props.name || 'World'}!`;
};

helloYou({name: 'Dwayne'});
