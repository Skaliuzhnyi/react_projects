import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../Ui/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHendler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.toDoFormContainer}>
      <form onSubmit={onSubmitHendler}>
        <input
          type="text"
          placeholder="Enter new TODO"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type='submit' title='Submit'>Submit</Button>
      </form>
    </div>
  );
}

export default TodoForm;
