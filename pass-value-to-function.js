function sayHello(props) {
    return `Hello, ${props?.name || 'World'}!`;
}

console.log(
    sayHello({name: 'Jacky'}), // Say hello to Jacky
    sayHello({name: 'Rebecca'}),  // Say hello to Rebecca
    sayHello()
);
