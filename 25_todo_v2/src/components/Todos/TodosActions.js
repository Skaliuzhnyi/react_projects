import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from "../Ui/Button";
import styles from './TodosActions.module.css';

function TodosActions({ complitedTodosExist, resetTodos, deleteComplitedTodos }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button
        title="Rest Todos"
        onClick={resetTodos}
      >
        <RiRefreshLine />
      </Button>
      <Button
        disabled={!complitedTodosExist}
        title="Clear Complited Todos"
        onClick={deleteComplitedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;