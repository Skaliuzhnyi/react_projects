import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Reset from './components/Reset';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  const btnStyle = { backgroundColor: 'purple', color: 'red', borderRadius: '50%'};

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />

      {count > 0 && <Reset onClick={resetCount} />}

      {count > 3 && (<button onClick={decrementCount} style={btnStyle}>New BTN</button>)}
    </div>
  );
}

export default App;
