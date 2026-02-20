import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode.js";
import { Textbox } from "../components/text-box.js";
import { SelectField } from "../components/select-field";
import { NODE_TYPES_ENUM } from "../constants/node-types.js";
import { NODE_DESCRIPTIONS } from "../constants/node-type-description.js";

export const ApiNode = ({ id, data }) => {
    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("GET");

    return (
        <BaseNode
            id={id}
            data={data}
            title="API"
            type={NODE_TYPES_ENUM.API}
            headerMessage={NODE_DESCRIPTIONS[NODE_TYPES_ENUM.API]}
            handles={[
                {
                    type: "target",
                    position: Position.Left,
                    id: `${id}-request`,
                },
                {
                    type: "source",
                    position: Position.Right,
                    id: `${id}-response`,
                },
            ]}
        >
            <Textbox
                label="URL"
                value={url}
                placeholder={"Enter"}
                onChange={setUrl}
                id={`${id}-url`}
            />
            <SelectField
                label="Method"
                value={method}
                onChange={setMethod}
                id={`${id}-method`}
                options={[
                    { label: "GET", value: "GET" },
                    { label: "POST", value: "POST" },
                ]}
            />
        </BaseNode>
    );
};
