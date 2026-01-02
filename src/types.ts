export type ButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    label: string;
    addClasses?: string;
}

export type TodoProps = {
    id: number;
    text: string;
    completed: boolean;
}

export type TodoFormProps = {
    addTodo: (text: string) => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
}

export type TodoListProps = {
    todos: TodoProps[];
}