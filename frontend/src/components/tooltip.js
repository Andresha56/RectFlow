import ReactDOM from "react-dom";
import "../styles/tool-tip.scss";
export const Tooltip = ({ position, message }) => {
    if (!position || !message) return null;

    return ReactDOM.createPortal(
        <div
            className="delete-tooltip"
            style={{
                top: position.top,
                left: position.left,
            }}
        >
            {message}
        </div>,
        document.body
    );
};
