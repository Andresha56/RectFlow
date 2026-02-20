import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { NODE_TYPES_ENUM } from "../constants/node-types.js";
import { NODE_DESCRIPTIONS } from "../constants/node-type-description.js";

export const LLMNode = ({ id, data }) => {
    return (
        <BaseNode
            title="LLM"
            data={data}
            type={NODE_TYPES_ENUM.LLM}
            headerMessage={NODE_DESCRIPTIONS[NODE_TYPES_ENUM.LLM]}
            handles={[
                {
                    type: "target",
                    position: Position.Left,
                    id: `${id}-system`,
                    style: { top: "33%" },
                },
                {
                    type: "target",
                    position: Position.Left,
                    id: `${id}-prompt`,
                    style: { top: "66%" },
                },
                {
                    type: "source",
                    position: Position.Right,
                    id: `${id}-response`,
                },
            ]}
        >
            <span>This is an LLM.</span>
        </BaseNode>
    );
};
