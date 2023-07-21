import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHendler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }

  const deleteTodoHendler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toogleTodoHendler = (id) => {
    setTodos((todos.map((todo) => 
    todo.id === id
      ? {...todo, isCompleted: !todo.isCompleted}
      : {...todo}
    )));
  };

  const resetTodosHendler = () => {
    setTodos([]);
  }

  const deleteComplitedTodosHendler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const complitedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>ToDo APP</h1>
      <TodoForm addTodo={addTodoHendler} />

      {!!todos.length && (
        <TodosActions
          complitedTodosExist={!!complitedTodosCount}
          resetTodos={resetTodosHendler}
          deleteComplitedTodos={deleteComplitedTodosHendler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHendler}
        toggleTodo={toogleTodoHendler}
      />

      {complitedTodosCount > 0 && <h2>{`You have ${complitedTodosCount} complited ${complitedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>}
    </div>
  );
}

export default App;
