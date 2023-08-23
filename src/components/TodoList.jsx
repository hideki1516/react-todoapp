import { TodoItem } from "./TodoItem"

export const TodoList = (props) => {

  return (
    <>
      {props.todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />
      })}
    </>
  )
}