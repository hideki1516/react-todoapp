import { TodoItem } from "./TodoItem"

export const TodoList = (props) => {

  return (
    <>
      <div className="todoContainer">
        <table className="todoList">
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
            {props.todos.map((todo) => {
              return <TodoItem key={todo.id} {...todo} />
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}