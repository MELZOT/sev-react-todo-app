import type {TodoListProps} from "../../types.ts";

const TodoList = ({todos}: TodoListProps) => {
    return (
        <>
            <ul className="space-y-2">

                { todos.map(todo => (
                    <li
                        key={todo.id}
                        className={`flex gap-4 mb-4`}
                    >
                        <span>{todo.text}</span>
                    </li>
                ))}

            </ul>
        </>
    )
}
export default TodoList;