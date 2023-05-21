import "./button.css";
export default function Button({ onClick, onMouseEnter, text, btnClass, id }) {
    return (
        <button id={id} className={btnClass} onClick={onClick} onMouseEnter={onMouseEnter}>{text}</button>
    )
}