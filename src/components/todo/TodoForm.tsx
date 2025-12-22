import Button from "../ui/Button.tsx";
import type {TodoFormProps} from "../../types.ts";
import {useState} from "react";

const TodoForm = ({addTodo, inputRef}: TodoFormProps) => {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim() !== "") {
            addTodo(text);
            setText("");
            inputRef.current?.focus();
        }
    }

    return (
        <>
            <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
                <input
                    ref = {inputRef}
                    value={text}
                    onChange={handleChange}
                    type="text"
                    className="flex-1 border p-2 rounded"
                    placeholder="New task..."
                />
                <Button label="Add"/>
            </form>
        </>
    )
}

export default TodoForm;