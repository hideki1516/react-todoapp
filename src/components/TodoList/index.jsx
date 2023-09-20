import { TodoItem } from "../TodoItem"
import styles from './TodoList.module.scss';

export const TodoList = (props) => {

  return (
    <>
      <div className={styles.container}>
        <table className={styles.list}>
          <thead>
            <tr>
              <th>ID</th>
              <th>タスク名</th>
              <th>状態</th>
              <th>期日</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="addTodoTarget">
            {props.todoItems.map((item) => {
              return <TodoItem key={item.id} {...item} />
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}