import {useState, useRef, useEffect} from "react";
import TodoForm from "./TodoForm.tsx";
import TodoList from "./TodoList.tsx";
import type { TodoProps } from "../../types";
import Button from "../ui/Button.tsx";

const getInitialTodos = (): TodoProps[] => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
}

const Todo = () => {
    const [todos, setTodos] = useState<TodoProps[]>(getInitialTodos);

    const inputRef = useRef<HTMLInputElement>(null);

    const addTodo = (text: string) => {
        setTodos(prev => [
            ...prev,
            {id: Date.now(), text, completed: false},
        ])
        console.log(todos);
    }

    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    const editTodo = (id: number, newText: string) => {
        setTodos(prev => prev.map(todo => todo.id === id ? {...todo, text: newText} : todo))
    }

    const toggleTodo = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const clearAllTodos = () => {
        setTodos([]);
    }

    useEffect(() => {
        inputRef.current?.focus();
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

    const totalTasks = todos.length;
    const completedTasks = todos.filter(t => t.completed).length;
    const activeTasks = totalTasks - completedTasks;

    return (
        <>
            <div className="max-w-sm mx-auto">
                <h1 className="text-center text-2xl py-8">To-Do List</h1>
                <TodoForm addTodo={addTodo} inputRef={inputRef} />
                <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                {totalTasks > 0 && (
                    <>
                        {/* TODO: add this to another component */}
                        <div className="flex justify-between border-t pt-2 mt-4 text-cf-gray">
                            <span>Total: {totalTasks}</span>
                            <span>Active: {activeTasks}</span>
                            <span>Completed: {completedTasks}</span>
                        </div>
                        <div className="text-end mt-4">
                            <Button
                                addClasses="bg-cf-dark-red"
                                label="Clear All"
                                onClick={clearAllTodos}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}


export default Todo;