import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import Pizza from "./components/Pizza";

const App = () => {
  // HelloWorld({name: 'Harwinder'});
  return (
    <main>
      <HelloWorld name="Harwinder" />
      <HelloWorld name="Jaeden" />
      <HelloWorld name="Sneha" />
      <Counter />
      <Pizza />
    </main>
  );
}

export default App;
