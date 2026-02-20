import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { NODE_TYPES_ENUM } from "../constants/node-types.js";
import { LabelInfo } from "../components/label-Info.js";
import "../styles/mention.scss";
import { useUpdateNodeInternals } from "reactflow";
import { useEffect } from "react";
import { useTextNodeVariables } from "../hooks/use-textNode-variables.js";
import { NODE_DESCRIPTIONS } from "../constants/node-type-description.js";
import { NodeMentionInput } from "../components/mention.js";
export const TextNode = ({ data, id }) => {
    const [value, setValue] = useState("");
    // const nodes = useStore((state) => state.nodes);

    const updateNodeInternals = useUpdateNodeInternals();
    useEffect(() => {
        updateNodeInternals(id);
    }, [id, updateNodeInternals]);

    const { variableHandles, onAddNode, onInputChange } = useTextNodeVariables({
        id,
        data,
        setValue,
    });
    return (
        <BaseNode
            id={id}
            data={data}
            title="Text"
            type={NODE_TYPES_ENUM.TEXT}
            headerMessage={NODE_DESCRIPTIONS[NODE_TYPES_ENUM.TEXT]}
            handles={[
                {
                    type: "source",
                    position: Position.Right,
                    id: `${id}-output`,
                },
                ...variableHandles,
            ]}
        >
            <LabelInfo label="Text" />

            <NodeMentionInput
                nodeId={id}
                value={value}
                onChange={onInputChange}
                onAdd={onAddNode}
            />
        </BaseNode>
    );
};
