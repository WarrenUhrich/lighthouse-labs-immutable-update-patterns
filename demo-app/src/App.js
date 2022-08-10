import Hello from './components/Hello';
import Counter from './components/Counter';
import Pizza2 from './components/Pizza2';

function App() {
  return (
    <>
      <h1>Hello From the App Component</h1>
      <Pizza2 />
      <Hello name="Archana" />
      <Hello name="Mohammed" />
      <Counter />
    </>
  );
}

export default App;
