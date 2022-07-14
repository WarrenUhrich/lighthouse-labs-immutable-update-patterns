import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import Pizza from "./components/Pizza";
import Pizza2 from "./components/Pizza2";

const App = () => {
  // HelloWorld({name: 'Harwinder'});
  return (
    <main>
      <HelloWorld name="Harwinder" />
      <HelloWorld name="Jaeden" />
      <HelloWorld name="Sneha" />
      <Counter />
      <Pizza />
      <Pizza2 />
    </main>
  );
}

export default App;
