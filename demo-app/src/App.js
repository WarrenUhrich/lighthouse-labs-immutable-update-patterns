import HelloWorld from "./components/HelloWorld";

const App = () => {
  // HelloWorld({name: 'Harwinder'});
  return (
    <main>
      <HelloWorld name="Harwinder" />
      <HelloWorld name="Jaeden" />
      <HelloWorld name="Sneha" />
    </main>
  );
}

export default App;
