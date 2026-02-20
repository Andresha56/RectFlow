import { NodeIconMap } from "./icons/iconMap";

export const DraggableNode = ({ type, label, className }) => {
    const onDragStart = (event, nodeType) => {
        const appData = { nodeType };
        event.target.style.cursor = "grabbing";
        event.dataTransfer.setData(
            "application/reactflow",
            JSON.stringify(appData)
        );
        event.dataTransfer.effectAllowed = "move";
    };
    const Icon = NodeIconMap[type];
    return (
        <div
            className={className}
            onDragStart={(event) => onDragStart(event, type)}
            onDragEnd={(event) => (event.target.style.cursor = "grab")}
            draggable
        >
            {Icon ? <Icon size={18} /> : null}
            <span style={{ color: "#fff" }}>{label}</span>
        </div>
    );
};
