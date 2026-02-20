import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { SelectField } from "../components/select-field";
import { NODE_TYPES_ENUM } from "../constants/node-types.js";
import { NODE_DESCRIPTIONS } from "../constants/node-type-description.js";

export const InputNode = ({ id, data }) => {
    const [inputType, setInputType] = useState(data?.inputType || "Text");

    return (
        <BaseNode
            title="Input"
            data={data}
            type={NODE_TYPES_ENUM.INPUT}
            headerMessage={NODE_DESCRIPTIONS[NODE_TYPES_ENUM.INPUT]}
            handles={[
                {
                    type: "source",
                    position: Position.Right,
                    id: `${id}-value`,
                },
            ]}
        >
            <SelectField
                id={`${id}-type`}
                value={inputType}
                onChange={setInputType}
                label="Type"
                options={[
                    { label: "Text", value: "Text" },
                    { label: "File", value: "File" },
                ]}
            />
        </BaseNode>
    );
};
