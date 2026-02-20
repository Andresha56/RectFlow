import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { SelectField } from "../components/select-field";
import { NODE_TYPES_ENUM } from "../constants/node-types.js";
import { NODE_DESCRIPTIONS } from "../constants/node-type-description.js";

export const MathNode = ({ id, data }) => {
    const [operation, setOperation] = useState("add");

    return (
        <BaseNode
            id={id}
            data={data}
            title="Math"
            type={NODE_TYPES_ENUM.MATH}
            headerMessage={NODE_DESCRIPTIONS[NODE_TYPES_ENUM.MATH]}
            handles={[
                {
                    type: "target",
                    position: Position.Left,
                    id: `${id}-a`,
                    style: { top: "30%" },
                },
                {
                    type: "target",
                    position: Position.Left,
                    id: `${id}-b`,
                    style: { top: "70%" },
                },
                {
                    type: "source",
                    position: Position.Right,
                    id: `${id}-result`,
                },
            ]}
        >
            <SelectField
                label="Operation"
                value={operation}
                onChange={setOperation}
                id={`${id}-operation`}
                options={[
                    { label: "Add", value: "add" },
                    { label: "Subtract", value: "subtract" },
                    { label: "Multiply", value: "multiply" },
                    { label: "Divide", value: "divide" },
                ]}
            />
        </BaseNode>
    );
};
