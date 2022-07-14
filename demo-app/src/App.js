import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";

const App = () => {
  // HelloWorld({name: 'Harwinder'});
  return (
    <main>
      <HelloWorld name="Harwinder" />
      <HelloWorld name="Jaeden" />
      <HelloWorld name="Sneha" />
      <Counter />
    </main>
  );
}

export default App;
