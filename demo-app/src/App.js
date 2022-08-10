import Hello from './components/Hello';
import Counter from './components/Counter';
import Pizza from './components/Pizza';

function App() {
  return (
    <>
      <h1>Hello From the App Component</h1>
      <Pizza />
      <Hello name="Archana" />
      <Hello name="Mohammed" />
      <Counter />
    </>
  );
}

export default App;
