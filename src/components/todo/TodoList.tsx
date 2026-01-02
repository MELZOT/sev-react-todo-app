import type {TodoListProps} from "../../types.ts";
import {Pencil, Save, Square, SquareCheck, Trash2, X} from "lucide-react";
import IconButton from "../ui/IconButton.tsx";
import {useState} from "react";

const TodoList = ({todos, editTodo, deleteTodo, toggleTodo}: TodoListProps) => {
    const [editId, setEditId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    const handleEdit = (id: number, text: string) => () => {
        setEditId(id);
        setEditText(text);
    }

    const handleCancel = () => {
        setEditId(null);
        setEditText("");
    }

    const handleSave = (id: number) => () => {
        if (editText.trim() !== "") {
            editTodo(id, editText);
            setEditId(null);
            setEditText("");
        }
    }

    return (
        <>
            <ul className="space-y-2">
                { todos.map(todo => (
                    <li
                        key={todo.id}
                        className={`flex items-center justify-between bg-gray-100 p-2 rounded 
            ${ todo.completed ? "opacity-60 line-through" : ""}`}
                    >
                        {editId === todo.id ? (
                            <>
                                <div className="flex flex-1 gap-2">
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="flex-1 border rounded p-1"
                                    />
                                    <IconButton
                                        icon={<Save size={18} />}
                                        onClick={handleSave(todo.id)}
                                        addClasses="text-cf-gray"
                                    />
                                    <IconButton
                                        icon={<X size={18} />}
                                        onClick={handleCancel}
                                        addClasses="text-cf-red"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center gap-2 flex-1">
                                    <IconButton
                                        icon={todo.completed ? <SquareCheck size={18} /> : <Square size={18} />}
                                        onClick={() => {toggleTodo(todo.id)}}
                                        addClasses="text-green-500"
                                    />
                                    <span>{todo.text}</span>
                                </div>
                                <div className="flex gap-2">
                                    <IconButton
                                        icon={<Pencil size={18} />}
                                        onClick={handleEdit(todo.id, todo.text)}
                                        addClasses="text-cf-gray"
                                    />
                                    <IconButton
                                        icon={<Trash2 size={18} />}
                                        onClick={() => {deleteTodo(todo.id)}}
                                        addClasses="text-cf-dark-red"
                                    />
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default TodoList;