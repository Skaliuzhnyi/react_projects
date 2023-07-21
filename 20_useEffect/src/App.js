import { useEffect, useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/147')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  console.log('app render');
  console.log(todo);

  return <div className="App">{todo && 
    <div>
      <h1>{todo.title}</h1>
      <h1>{todo.userId}</h1>
      <h1>{todo.title}</h1>
    </div>
  }</div>;
}

export default App;
