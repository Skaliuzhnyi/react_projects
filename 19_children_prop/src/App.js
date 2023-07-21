import './App.css';
import Wrapper from './components/Wrapper';
import AnotherChildren from './components/AnotherChildren';

function App() {
  return (
    <div className="App">
      <Wrapper color="red">
        <h2>Text inside of the Wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Second Wrapper</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa laboriosam natus alias soluta quisquam facilis vitae, aperiam quos hic minima velit atque dicta consectetur voluptatum placeat dolorum dolor nihil.</p>
        <input
          type="text"
          placeholder="Enter your text"
        />
      </Wrapper>
      <AnotherChildren color="lightgreen">
        <h1>AnotherChildren</h1>
        <h2>Another TEXT</h2>
      </AnotherChildren>

      <AnotherChildren color="orange">
        <h1>Children</h1>
        <h2>TEXT</h2>
        <input
          type="text"
          placeholder="Enter your text"
        />
      </AnotherChildren>
    </div>
  );
}

export default App;
