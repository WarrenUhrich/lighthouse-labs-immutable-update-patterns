export default function BadCounter() {
    let count = 0;

    return (
        <section>
            <h2>Counter Component</h2>
            <p>Counter has been clicked {count} times.</p>
            <button onClick={() => console.log(count++)}>
                Click to Increment
            </button>
        </section>
    );
}
