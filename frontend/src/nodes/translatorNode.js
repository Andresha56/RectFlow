import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { SelectField } from "../components/select-field";
import { NODE_TYPES_ENUM } from "../constants/node-types.js";
import { NODE_DESCRIPTIONS } from "../constants/node-type-description.js";
import { NodeMentionInput } from "../components/mention.js";
import { useTextNodeVariables } from "../hooks/use-textNode-variables.js";
export const TranslatorNode = ({ id, data }) => {
    const [language, setLanguage] = useState("spanish");
    const [value, setValue] = useState("");
    const { variableHandles, onAddNode, onInputChange } = useTextNodeVariables({
        id,
        data,
        setValue,
    });
    return (
        <BaseNode
            data={data}
            id={id}
            title="Translator"
            type={NODE_TYPES_ENUM.TRANSLATE}
            headerMessage={NODE_DESCRIPTIONS[NODE_TYPES_ENUM.TRANSLATE]}
            handles={[
                {
                    type: "target",
                    position: Position.Left,
                    id: `${id}-input`,
                },
                {
                    type: "source",
                    position: Position.Right,
                    id: `${id}-output`,
                },
                ...variableHandles,
            ]}
        >
            <NodeMentionInput
                nodeId={id}
                value={value}
                onChange={onInputChange}
                onAdd={onAddNode}
            />

            <SelectField
                label="Translate To"
                value={language}
                onChange={setLanguage}
                id={`${id}-language`}
                options={[
                    { label: "Spanish", value: "spanish" },
                    { label: "French", value: "french" },
                    { label: "German", value: "german" },
                    { label: "Hindi", value: "hindi" },
                ]}
            />
        </BaseNode>
    );
};
