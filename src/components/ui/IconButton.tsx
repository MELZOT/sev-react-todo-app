import type {IconButtonProps} from "../../types.ts";

const IconButton = ({onClick, disabled=false, icon, addClasses=""}: IconButtonProps) => {
    return (
        <>
            <button
                className={`onhover:opacity-80 ${addClasses}`}
                onClick={onClick}
                disabled={disabled}
            >{icon}
            </button>
        </>
    )
}

export default IconButton;