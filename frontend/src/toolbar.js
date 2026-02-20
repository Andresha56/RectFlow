import { DraggableNode } from "./draggableNode";
import "../src/styles/toolbar.scss";
import { NODE_TYPES_ENUM } from "./constants/node-types";
import { SubmitButton } from "./submit";
const NODE_TYPES = [
    { type: NODE_TYPES_ENUM.INPUT, label: "Input" },
    { type: NODE_TYPES_ENUM.LLM, label: "LLM" },
    { type: NODE_TYPES_ENUM.OUTPUT, label: "Output" },
    { type: NODE_TYPES_ENUM.TEXT, label: "Text" },
    { type: NODE_TYPES_ENUM.API, label: "API" },
    { type: NODE_TYPES_ENUM.MATH, label: "Math" },
    { type: NODE_TYPES_ENUM.CONDITION, label: "Condition" },
    { type: NODE_TYPES_ENUM.TRANSLATE, label: "Translate" },
    { type: NODE_TYPES_ENUM.DELAY, label: "Delay" },
];

export const PipelineToolbar = () => {
    return (
        <div className="toolbar-container">
            <div className="toolbar-list">
                {NODE_TYPES.map(({ type, label }) => (
                    <DraggableNode
                        key={type}
                        type={type}
                        label={label}
                        className="toolbar-node"
                    />
                ))}
            </div>
            <SubmitButton className={"submit-btn"} />
        </div>
    );
};
