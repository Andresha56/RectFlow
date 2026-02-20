import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { Textbox } from "../components/text-box.js";
import { SelectField } from "../components/select-field";
import { NODE_TYPES_ENUM } from "../constants/node-types.js";
import { NODE_DESCRIPTIONS } from "../constants/node-type-description.js";

export const OutputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(
        data?.outputName || "customOutput"
    );
    const [outputType, setOutputType] = useState(data?.outputType || "Text");

    return (
        <BaseNode
            title={"Output"}
            data={data}
            type={NODE_TYPES_ENUM.OUTPUT}
            headerMessage={NODE_DESCRIPTIONS[NODE_TYPES_ENUM.OUTPUT]}
            handles={[
                {
                    type: "target",
                    position: Position.Left,
                    id: `${id}-value`,
                },
            ]}
        >
            <Textbox
                id={`${id}-text`}
                type="text"
                value={currName}
                onChange={setCurrName}
                label={"Name:"}
            />
            <SelectField
                value={outputType}
                onChange={setOutputType}
                id={`${id}-type`}
                label={"Type:"}
                options={[
                    { label: "Text", value: "Text" },
                    { label: "Image", value: "Image" },
                ]}
            />
        </BaseNode>
    );
};
