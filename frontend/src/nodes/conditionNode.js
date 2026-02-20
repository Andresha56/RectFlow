import { Position } from "reactflow";
import { BaseNode } from "./baseNode.js";
import { NODE_TYPES_ENUM } from "../constants/node-types.js";
import { NODE_DESCRIPTIONS } from "../constants/node-type-description.js";

export const ConditionNode = ({ id, data }) => {
    return (
        <BaseNode
            id={id}
            data={data}
            title="Condition"
            type={NODE_TYPES_ENUM.CONDITION}
            headerMessage={NODE_DESCRIPTIONS[NODE_TYPES_ENUM.CONDITION]}
            handles={[
                { type: "target", position: Position.Left, id: `${id}-input` },
                {
                    type: "source",
                    position: Position.Right,
                    id: `${id}-true`,
                    style: { top: "30%" },
                },
                {
                    type: "source",
                    position: Position.Right,
                    id: `${id}-false`,
                    style: { top: "70%" },
                },
            ]}
        >
            <p>True / False Branch</p>
        </BaseNode>
    );
};
