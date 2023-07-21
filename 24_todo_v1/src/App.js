import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodoHendler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodoHendler = (index) => {
    setTodos(todos.fill((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>ToDo APP</h1>
      <TodoForm addTodo={addTodoHendler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHendler}/>
    </div>
  );
}

export default App;
