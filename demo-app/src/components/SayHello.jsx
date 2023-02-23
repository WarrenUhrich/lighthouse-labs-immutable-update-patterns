export default function SayHello(props) {
    return <p>Hello, {props?.name || 'World'}!</p>;
}
