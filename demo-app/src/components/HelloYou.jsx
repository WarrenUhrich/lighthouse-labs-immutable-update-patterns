const HelloYou = (props) => {
    return (
        <p>Hello, {props.name || 'World'}!</p>
    );
};

export default HelloYou;
