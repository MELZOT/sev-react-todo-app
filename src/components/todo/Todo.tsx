import {useState, useRef, useEffect} from "react";
import TodoForm from "./TodoForm.tsx";
import type { TodoProps } from "../../types";

const Todo = () => {
    const [todos, setTodos] = useState<TodoProps[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const addTodo = (text: string) => {
        setTodos(prev => [
            ...prev,
            {id: Date.now(), text, completed: false},
        ])
        console.log(todos);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [todos]);

    return (
        <>
            <div className="max-w-sm mx-auto">
                <h1 className="text-center text-2xl py-8">To-Do List</h1>
                <TodoForm addTodo={addTodo} inputRef={inputRef} />
            </div>
        </>
    )
}

export default Todo;