import "./anchor.css";
export default function Anchor({ divClass, aClass, text, href, onClick }) {
    return (
        <div className={divClass + " anchor"}>
            <span className="anchor_span">{text}</span>
            <a href={href} className={aClass + " anchor_btn"} onClick={onClick}>{text}</a>
        </div>
    )
}